import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY)
const Payment = () => {
    return (

        <div>
            <Element stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Element>
        </div>
    );
};

export default Payment;