import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import useAxios from "../../Hooks/useAxios";


const CheckoutForm = () => {
    
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransationId] = useState('')
    const stripe = useStripe();
    const elements= useElements();
    const useAxios = useAxios()
    const {user} = useAuth()
    console.log(user)
    // const [cart, refetch] = useCart();
    const navigate = useNavigate()

    const TotalPrice = 100;

    useEffect(()=>{
           if(TotalPrice > 0 ){
            useAxios.post('/create-payment-intent', {price:TotalPrice})
           .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
           })
           }
    },[useAxios, TotalPrice])


    const handleSubmit =  async(e) =>{
        e.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error)
            setError(error.message)
        } else{
            console.log('payment methode', paymentMethod)
            setError('')
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
                status: 'Membership'
              }
  
             const res = await useAxios.post('/payments' , payment);
             console.log('payment save',res.data);
             const updatedUser = {
              badge: "GoldenBadge",
            };
    
            const resposnse = await useAxios.put(
              `/user-badge/${user?.email}`,
              updatedUser
            );
            
            console.log("payment save", resposnse.data);
             refetch();
             if(res.data?.insertedId){
              Swal.fire({
                title: "You got a golden badge",
                text: "Payment successful",
                icon: "success"
              });
              navigate('/')
  
             }
  
  
            }
           
          }
       
    }


    return (
      <div>
         <div className="w-1/2 mx-auto border rounded-xl backdrop-blur-md bg-white/10  text-white shadow-md pt-24 pb-10">
         <form onSubmit={handleSubmit}>
              <CardElement
        options={{
          style: {
            base: {
              fontSize: '26px',
              color: '#0ef',
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
     <button id="btn-style" type="submit" className=" bg-cyan-400 text-white font-bold text-xl mt-4" disabled={!stripe || !clientSecret}>
        Pay
      </button>
     </div>
      <p className="text-red-500">{error}</p>
      {transactionId && <p className="text-green-600"> Your transaction Id: {transactionId}</p>}
        </form>
       </div>
      </div>
    );
};

export default CheckoutForm;