import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutFrom";
import Navber from "../../shared/Navber/Navber";
import HelmetTitle from "../../shared/HelmetTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <>
      <Navber></Navber>
      <HelmetTitle title="Payment" />
      <div className="pb-24 ">
        <h2 className="text-teal-600 text-4xl text-center font-bold">
          Pay For Premium
        </h2>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
