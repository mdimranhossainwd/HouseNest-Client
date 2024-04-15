import { FaLocationArrow } from "react-icons/fa";

const AdminPropertyCard = ({ item }) => {
  const { _id, title, img, location, email, agent, price } = item || {};
  return (
    <div>
      <img src={img} className=" h-48 object-cover w-full" alt="" />

      <div className="px-3 py-4 font-medium space-y-2">
        <p className="flex text-xl items-center gap-4">{title}</p>
        <p className="flex gap-4 pb-2 items-center">
          <FaLocationArrow /> {location}
        </p>
        <span>{agent}</span>
        <p>
          Status :{" "}
          <span className="text-md text-blue-500 font-semibold">verify</span>
        </p>
      </div>
      <div className="text-lg font-medium px-3">
        <p className="mb-5">Price :- {price}</p>
      </div>
    </div>
  );
};

export default AdminPropertyCard;
