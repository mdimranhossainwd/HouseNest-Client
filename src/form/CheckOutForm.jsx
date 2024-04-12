import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

import useProperty from "../hooks/useProperty";
const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [transitionsID, setIsTransitionsID] = useState("");
  const [property, refetch] = useProperty();
  const axios = useAxios();
  const { user } = useAuth();
  const findPrice = property.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (findPrice) {
      axios
        .post("/create-payment-intent", { price: findPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [findPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonyomus",
            name: user?.displayName || "anonyomus",
          },
        },
      }
    );

    if (error) {
      console.log("Payment Error !", error);
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("Payment Intent Method", paymentIntent);
        setIsTransitionsID(paymentIntent.id);

        const paymentAll = {
          user: user.email,
          price: findPrice,
          date: new Date(),
          transitions: paymentIntent.id,
          singleId: property.map((item) => item._id),
          menuitemID: property.map((item) => item.pricing),
          status: "success",
        };

        console.log(paymentAll);

        try {
          const res = await axios.post("/payment", paymentAll);
          if (res?.data?.result?.insertedId) {
            refetch();
            toast.success("Payment Successfully");
          }
        } catch (error) {
          console.log("Payment Error", error);
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 space-y-10 mt-12 items-center justify-center">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                border: "1px solid red",
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
        <button
          className="bg-[#1F2937] px-9 mt-12 w-full mx-auto text-md space-x-2 font-medium py-3 text-[#F42643] border-0 rounded-md"
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
