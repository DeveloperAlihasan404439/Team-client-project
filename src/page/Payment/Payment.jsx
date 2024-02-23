import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutFrom";
import Navber from "../../shared/Navber/Navber";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <Navber></Navber>
           <div className="pb-24 ">
           <h2 className="text-teal-600 text-4xl text-center font-bold">Pay For Premium</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
           </div>
        </div>
    );
};

export default Payment;