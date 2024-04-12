import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../form/CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_HOUSENEST_STRIPE_PK);

const Payment = () => {
  return (
    <div className="mx-10 mt-44 items-center justify-center">
      <h2 className="text-5xl font-medium uppercase font-pt text-center ">
        Payment
      </h2>
      <div className="w-1/2 mx-auto items-center justify-center">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
