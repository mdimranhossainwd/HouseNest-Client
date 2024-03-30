import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const RoomCard = ({ roominfo }) => {
  const { _id, img, pricing, location, verification_status, button } =
    roominfo || {};

  return (
    <div>
      <div className="relaive">
        <img src={roominfo?.img} className=" h-48 object-cover w-full" alt="" />

        <div className="text-lg px-3 py-4 font-medium space-y-2">
          <p className="flex items-center gap-4">
            <IoLocationSharp /> {roominfo.location.city}{" "}
          </p>
          <p>Status : {roominfo.verification_status}</p>
        </div>
        <div className="text-lg font-medium px-3">
          <p className="mb-5">Price :- {roominfo.pricing.price}</p>
          <Link
            to={`/roominfo/${_id}`}
            className="btn-outline rouded-md justify-center border bg-blue-600 px-4 py-2 mx-auto flex items-center text-center text-white font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
