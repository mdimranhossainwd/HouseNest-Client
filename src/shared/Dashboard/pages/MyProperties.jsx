import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GrUpdate } from "react-icons/gr";

import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const MyProperties = () => {
  const axios = useAxios();

  const getProperty = async () => {
    const res = await axios.get("/addproperty");
    return res;
  };

  const { data: propertyInfo, refetch } = useQuery({
    queryKey: ["propertyInfo"],
    queryFn: getProperty,
  });

  const handleDelete = (id) => {
    axios.delete(`/addproperty/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Delete This Property");
        refetch();
      }
    });
  };

  return (
    <div className="mx-6">
      <h2 className="text-4xl font-semibold text-center my-12">
        My Add Properties
      </h2>

      <div>
        <table className="table w-full">
          {/* head */}
          <thead className="bg-blue-400 text-white rounded-xl">
            <tr className="text-lg font-pt">
              <th></th>
              <th>Property Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Location</th>
              <th>A.Name</th>
              <th>A.Img</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {propertyInfo?.data?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" w-32 h-20 rounded-md">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium text-[16px]">{item.title}</td>
                <td className="font-medium">{item.price}</td>
                <td className="text-md font-semibold"> {item.location}</td>
                <td className="text-md font-semibold">{item.agent}</td>
                <td className="text-md font-semibold"> {item.location}</td>
                <th>
                  <NavLink to={`/dashboard/updateproperty/${item._id}`}>
                    <button className="btn btn-ghost btn-lg">
                      <GrUpdate />
                    </button>
                  </NavLink>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <RiDeleteBin6Line />
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

export default MyProperties;
