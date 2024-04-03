import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishlistsCard = ({ room }) => {
  const {
    _id,
    wishlistID,
    img,
    pricing,
    email,
    location,
    name,
    verification_status,
    user,
  } = room || {};
  return (
    <div className="mx-8 mt-6">
      {/* <div className="col-span-5"></div> */}

      <div className="md:flex items-center justify-around gap-6 border border-b-2  py-6 rounded-xl">
        <div>
          <img className=" w-64 h-40 object-cover" src={img} alt="" />
        </div>

        <div className="mx-24 md:mx-0">
          <div className="-ml-16 ">
            <h3 className="text-3xl font-md font-medium mb-4">
              {location?.city}
            </h3>
            <div className="flex items-center gap-2">
              <IoLocationSharp />
              <span className="text-md font-semibold"> {location?.state} </span>
            </div>
            <p className="text-md">Price: {pricing?.price}</p>

            <div className="md:flex items-center gap-6">
              <h4 className="text-xl text-blue-600 font-bold">{name}</h4>
              <img className="rounded-full w-14" src={room?.photo} alt="" />
              <span className="text-md font-medium">
                Status : {verification_status}
              </span>
            </div>
          </div>
        </div>
        <div className="-mt-8">
          <Link to={`/dashboard/makeoffer/${room._id}`}>
            <button className="bg-blue-600 ml-5 -mb-8 block text-white px-4 py-2 border-0 rounded-md mt-12 border-none">
              Make Offer
            </button>
          </Link>
          <button className="bg-blue-600 block text-white px-7 py-2 ml-6 border-0 rounded-md mt-12 border-none">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistsCard;
