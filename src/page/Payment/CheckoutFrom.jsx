import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import bgimage from '../../assets/image/paymentsite-20240215093600jmwu.png'
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../shared/Auth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransationId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxios();
  const navigate = useNavigate()
  const {user} = useAuth()
  const TotalPrice = 100;

  console.log(user)
  useEffect(()=>{
         if(TotalPrice > 0 ){
          axiosPublic.post('/create-payment-intent', {price:TotalPrice})
         .then(res =>{
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
         })
         .catch(error => {console.log(error.message)})
        }
  },[axiosPublic, TotalPrice])

  const handleSubmit = async(event) => {
    event.preventDefault();
 
        if (!stripe || !elements) {
          
          return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
      console.log('[error]', error);
      setError(error.message)
    } 
    else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }
     // confirm payment
     const { paymentIntent, error:confirmError } =await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    console.log('line 64')
    if(confirmError){
      console.log('confirm error')
    }
    else{
      console.log('payment intetn', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        console.log('transion id', paymentIntent.id)
        setTransationId(paymentIntent.id)

        // now save the pement in the database 
        const payment = {
          email: user.email,
          price: TotalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),  //UTC date convert. use moment js to 
          status: 'premium'
        }

       const res = await axiosPublic.post('/payments' , payment);
       console.log('payment save',res.data);
       if(res?.data?.transactionId ){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your payment is successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
       }
       const updatedUser = {
        role: 'pUsers',
      };

      const resposnse = await axiosPublic.put(
        `/user-badge/${user?.email}`,
        updatedUser
      );
      
      console.log("payment save", resposnse.data);
       
      }
     
    }
    
    }

    return (
      <div>
      <div style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-1/3  mx-auto border rounded-xl backdrop-blur-md bg-white/10 p-8 text-white shadow-md pt-24 pb-10">
      <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
  <CardElement
    options={{
      style: {
        base: {
          fontSize: '26px',
          color: '#FFFFFF',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
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
    {transactionId && <p className="text-green-600"> Your transaction Id: {transactionId}</p>}
  </div>
</form>
    </div>
   </div>
    );
};

export default CheckoutForm;
