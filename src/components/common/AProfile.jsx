import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AProfile = () => {
  const { user } = useAuth();
  const [userRole, setIsRole] = useState([]);
  const axios = useAxios();
  axios.get(`/roleusers/${user?.email}`).then((res) => {
    setIsRole(res.data);
  });

  console.log(userRole);

  return (
    <div>
      <div className="bg-base-200 items-center justify-center mx-44 my-24 ">
        <div>
          <img
            className=" mx-auto w-full max-h-[250px] flex items-center justify-center"
            src="https://i.ibb.co/4JVGNvp/6eaac87ac68095e083d1ad6fce3eb58d.jpg"
            alt=""
          />
          <div className="">
            <img
              className=" w-52 object-cover h-52 mx-auto -mt-24 z-50 rounded-full ring ring-base-500 ring-offset-base-100 ring-offset-2"
              src={userRole?.photoURL}
              alt=""
            />
          </div>
        </div>

        <div className="text-center pb-12">
          <p className="text-lg font-semibold text-center py-6">
            User ID:- {userRole?._id}
          </p>
          <div className="flex items-center justify-center gap-6">
            <p className="">
              Name: <br />
              <span className="text-md font-medium">
                {userRole?.displayName}
              </span>
            </p>
            <p>
              Email: <br />{" "}
              <span className="text-md font-medium">{userRole?.email}</span>
            </p>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 border-0 rounded-md mt-12 border-none">
              Update Profile
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 ml-6 border-0 rounded-md mt-12 border-none">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AProfile;
