import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment methode", paymentMethod);
      setError("");
    }
  };

  return (
    <div className="bg-cyan-400 py-80">
    <div style={{ background: 'red', padding: '10px', borderRadius: '5px' }}>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "26px",
                  background: 'red',
                  color: "#0ef",
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
              id="btn-style"
              type="submit"
              className=" bg-cyan-400 text-white font-bold text-xl mt-4"
              disabled={!stripe}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
