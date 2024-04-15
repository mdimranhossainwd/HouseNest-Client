import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import useAxios from "../../../hooks/useAxios";

const ManagePropertiesPage = () => {
  const axios = useAxios();
  const [addedProperties, setAddedProperties] = useState(new Set());
  const [removeProperties, setRemoveProperties] = useState(new Set());
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
        setAddedProperties((prev) => new Set([...prev, id]));
      }
    });
  };

  const handleRejectProperty = (id) => {
    setRemoveProperties((prev) => new Set([...prev, id]));
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
                    onClick={() => handleAddProperty(item._id)}
                    className="p-5 hover:text-blue-500 text-black "
                    disabled={addedProperties.has(item._id)} // Disable button if property is already added
                  >
                    {addedProperties.has(item._id) ? (
                      <h2 className="text-lg -ml-3 font-semibold text-blue-600">
                        verify
                      </h2>
                    ) : (
                      <FaCheck />
                    )}
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleRejectProperty(item._id)}
                    className="p-5 hover:text-blue-500 text-black"
                  >
                    {removeProperties.has(item._id) ? (
                      <span className="text-red-500 text-md -ml-4">
                        Rejected
                      </span>
                    ) : (
                      <RxCrossCircled />
                    )}
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
