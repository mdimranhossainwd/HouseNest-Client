import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const {
    _id,
    title,
    location,
    img,
    verification_status,
    name,
    agentname,
    date,
    email,
    amount,
    buyername,
  } = property || {};

  console.log(property);

  return (
    <div>
      <div className="mt-10">
        <img src={img} className=" h-48 object-cover w-full" alt="" />

        <div className="text-lg px-3 py-4 font-medium space-y-2">
          <p className="text-2xl font-medium"> {title}</p>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-4">
              <IoLocationSharp /> {location}{" "}
            </p>
            <p>Status : {verification_status}</p>
          </div>
          <h4 className="pt-3 text-lg text-blue-600"> {buyername}</h4>
        </div>
        <div className="text-lg font-medium px-3">
          <p className="mb-5">Offer Amount :- {amount}</p>
          <Link
            to="/dashboard/payment"
            className="btn-outline rouded-md justify-center border bg-blue-600 px-4 py-2 mx-auto flex items-center text-center text-white font-medium"
          >
            Payy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
