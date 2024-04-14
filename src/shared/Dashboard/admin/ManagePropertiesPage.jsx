import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import useAxios from "../../../hooks/useAxios";

const ManagePropertiesPage = () => {
  const axios = useAxios();
  const getProperty = async () => {
    const res = axios.get("/addproperty");
    return res;
  };

  const { data: propertyInfo, refetch } = useQuery({
    queryKey: ["propertyInfo"],
    queryFn: getProperty,
  });
  const handleAddProperty = (id) => {
    const specificProperty = propertyInfo?.data.find((item) => item._id === id);
    console.log(specificProperty);
    axios.post("/allproperties", specificProperty).then((res) => {
      if (res.data.insertedId) {
        toast.success("This Property Added to DB !!");
      }
    });
  };

  return (
    <div className="mx-6">
      <h2 className="text-4xl font-semibold text-center my-12">
        Mange Propeties
      </h2>
      <div>
        <table className="table w-full">
          {/* head */}
          <thead className="bg-blue-400 text-white rounded-xl">
            <tr className="text-lg font-pt">
              <th>Title</th>
              <th>Price</th>
              <th>Location</th>
              <th>A.Name</th>
              <th>A.Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {propertyInfo?.data?.map((item) => (
              <tr key={item._id}>
                <td className="font-medium text-[16px]">{item.title}</td>
                <td className="font-medium">{item.price}</td>
                <td className="text-md font-semibold"> {item.location}</td>
                <td className="text-md font-semibold"> {item.agent}</td>
                <td className="text-md font-semibold"> {item.email}</td>
                <th>
                  <button
                    onClick={() => handleAddProperty(item?._id)}
                    className="btn hover:text-blue-500 text-black btn-ghost btn-lg"
                  >
                    <FaCheck />
                  </button>
                </th>
                <th>
                  <button className="btn text-2xl hover:text-blue-500 text-black btn-ghost btn-lg">
                    <RxCrossCircled />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePropertiesPage;
