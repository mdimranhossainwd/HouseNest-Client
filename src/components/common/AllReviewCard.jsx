import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../../hooks/useAxios";

const AllReviewCard = ({ item }) => {
  const { _id, title, name, star, date, review } = item || {};
  const axios = useAxios();

  const handleDelete = (item) => {
    axios.delete(`/reviews/${item}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("User Review Delete Successfully");
      }
    });
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://i.ibb.co/dmVq6Sd/background-tree-white.jpg')`,
        }}
        className=""
      >
        <div className="card-body text-center">
          <div className="flex items-center justify-around">
            <h2 className=" flex text-xl font-semibold items-center justify-center">
              {title}
            </h2>
            <button
              onClick={() => handleDelete(_id)}
              className="rouded-lg justify-center border bg-blue-600 px-4 py-2 mx-auto flex items-center text-center text-white font-medium"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
          <h4 className="text-lg font-semibold text-blue-600">{name}</h4>
          <p>{date}</p>
          <p className="text-lg mb-6 font-medium">{review}</p>
        </div>
      </div>
    </>
  );
};

export default AllReviewCard;
