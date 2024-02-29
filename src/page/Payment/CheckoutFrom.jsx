/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import bgimage from "../../assets/image/paymentsite-20240215093600jmwu.png";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../shared/Auth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUserSingle from "../../Hooks/useUserSingle";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransationId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxios();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { usersData } = useUserSingle();
  const TotalPrice = 100;
  useEffect(() => {
    if (TotalPrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: TotalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [axiosPublic, TotalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransationId(paymentIntent.id);

        // now save the pement in the database
        const payment = {
          email: user.email,
          price: TotalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //UTC date convert. use moment js to
          status: "premium",
        };

        const res = await axiosPublic.post("/payments", payment);
        console
        if (res?.data?.transactionId) {
          console.log(res.data.transactionId)
          const updatedUser = {
            role: "premium",
          };
          await axiosPublic.put(`/user/premium/${user?.email}`,updatedUser).then(res =>{
            console.log(res.data)
          })
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Payments",
            showConfirmButton: false,
            background: "#144248",
            color: "#EEEEEE",
            timer: 2000,
          });
        }
        
      }
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" lg:w-1/3 md:w-1/2 w-full  mx-auto border rounded-xl backdrop-blur-md bg-white/10 p-8 text-white shadow-md lg:pt-24 pt-9 pb-10"
      >
        <form onSubmit={handleSubmit} style={{ display: "contents" }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "26px",
                  color: "#FFFFFF",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="text-center mt-10 border-t-2">
            <button
              type="submit"
              className=" font-bold btn-md btn text-xl mt-4"
              disabled={!stripe}
            >
              Pay
            </button>
            <p className="text-red-600 font-bold">{error}</p>
            {transactionId && (
              <p className="text-green-600">
                {" "}
                Your transaction Id: {transactionId}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
