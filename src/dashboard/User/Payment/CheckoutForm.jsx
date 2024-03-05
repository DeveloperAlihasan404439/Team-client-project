/* eslint-disable no-undef */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
// import bgimage from "../../../assets/image/paymentsite-20240215093600jmwu.png";
import useAuth from "../../../shared/Auth/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // eslint-disable-next-line no-unused-vars
  const [clientSecret, setClientSecret] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [transactionId, setTransationId] = useState("");
  const { user } = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
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
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/DeveloperAlihasan404439/Team-client-project/moshiur/src/assets/image/paymentsite-20240215093600jmwu.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-1/3  mx-auto border rounded-xl backdrop-blur-md bg-white/10 p-8 text-white shadow-md pt-24 pb-10"
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
            <p className="text-red-600">{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
