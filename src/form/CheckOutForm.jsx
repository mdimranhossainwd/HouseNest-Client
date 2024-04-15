import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

import { useQuery } from "@tanstack/react-query";
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
  const offerProperty = async () => {
    const res = axios.get(`/offer?email=${user.email}`);
    return res;
  };

  const { data: propertyData } = useQuery({
    queryKey: ["propertyInfo"],
    queryFn: offerProperty,
  });

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
          singleId: propertyData.data.map((item) => item._id),
          buyer: propertyData.data.map((item) => item.buyerName),
          mail: propertyData.data.map((item) => item.email),
          title: propertyData.data.map((item) => item.title),
          location: propertyData.data.map((item) => item.location),
          housePrice: propertyData.data.map((item) => item.amount),
          status: "success",
        };

        try {
          const res = await axios.post("/payment", paymentAll);
          if (res?.data?.result?.insertedId) {
            refetch();

            Swal.fire({
              title: "Paymnet Successfully ",
              text: "Your document has unsaved changes. Discard or save them as a new page to continue.",
              icon: "success",
              timer: 1000,
              showConfirmButton: false,
            });

            // toast.success("Payment Successfully");
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
          className="bg-blue-600 px-9 mt-12 w-full mx-auto text-md space-x-2 font-medium py-3 text-white border-0 rounded-md"
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
