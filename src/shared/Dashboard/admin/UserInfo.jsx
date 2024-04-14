import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaUsersCog } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCrosshair2 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const UserInfo = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const allUserserInfo = async () => {
    const res = axios.get("/users");
    return res;
  };

  const { data: userData, refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: allUserserInfo,
  });

  console.log(userData);

  const handleMakeAdmin = (id) => {
    axios.patch(`/users/admin/${id}`).then((res) => {
      console.log(res?.data);
      if (res?.data?.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `This user is Admin Now`,
          text: "Your document has unsaved changes. Discard or save them as a new page to continue.",
          icon: "success",
        });
      }
    });
  };

  const handleMakeAgent = (id) => {
    axios.patch(`/users/agent/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `This user is Admin Now`,
          text: "Your document has unsaved changes. Discard or save them as a new page to continue.",
          icon: "success",
        });
      }
    });
  };
  const handleMakeFraud = (id) => {
    axios.patch(`/users/fraud/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `This user is Fraud`,
          text: "Your document has unsaved changes. Discard or save them as a new page to continue.",
          icon: "success",
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-12">
        Manage All User's
      </h2>

      <div className="overflow-x-auto bg-white py-10 mx-8 px-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-4xl font-pt font-semibold">
            Total User's : {userData?.data?.length}
          </h2>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead className="bg-blue-500 text-white rounded-xl">
            <tr className="text-xl font-pt">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {userData?.data?.map((item, index) => (
              <tr key={item._id}>
                <td className="text-md font-semibold">{item.displayName}</td>
                <td className="text-md">{item.mail}</td>
                <td>
                  {item.role === "admin" ? (
                    <h2 className="text-md font-bold text-blue-600">Admin</h2>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(item?._id)}
                      className="p-4 transition text-lg rounded-md hover:bg-[#1F2937] hover:text-white"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td>
                  {item.role === "agent" ? (
                    <h2 className="text-md font-bold text-blue-600">Agent</h2>
                  ) : (
                    <button
                      onClick={() => handleMakeAgent(item?._id)}
                      className="p-4 transition text-lg rounded-md hover:bg-[#1F2937] hover:text-white"
                    >
                      <FaUsersCog />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="p-4 transition rounded-md text-lg hover:bg-[#1F2937] hover:text-white"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
                <td>
                  {item.role === "fruad" ? (
                    <h2 className="text-md font-bold text-blue-600">
                      Fraud User
                    </h2>
                  ) : (
                    <button
                      onClick={() => handleMakeFraud(item?._id)}
                      className="p-4 transition rounded-md text-lg hover:bg-[#1F2937] hover:text-white"
                    >
                      <RxCrosshair2 />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
