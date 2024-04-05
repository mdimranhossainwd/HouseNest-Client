import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const UpdateForm = () => {
  const item = useLoaderData();
  const axios = useAxios();
  const navigate = useNavigate();
  const { _id, title, img, location, email, agent, price } = item || {};

  const updateProperty = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.img.value;
    const location = form.location.value;
    const email = form.email.value;
    const agent = form.agent.value;
    const price = form.price.value;

    const updateAllData = {
      title,
      img,
      location,
      email,
      agent,
      price,
    };

    const updateHouse = await axios.patch(`/addproperty/${_id}`, updateAllData);
    if (updateHouse.data.modifiedCount > 0) {
      toast.success("Update to This Property");
      navigate("/dashboard/myproperties");
    }
  };

  return (
    <div className="mx-12">
      <h2 className="text-4xl text-center font-semibold my-12">
        Update Property{" "}
      </h2>
      <form onSubmit={updateProperty}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Property Title
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Property Location
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                defaultValue={location}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Property Image
              </span>
            </label>
            <label className="input-group">
              <input
                type="img"
                name="img"
                defaultValue={img}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Agent Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="agent"
                defaultValue={agent}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Agent Email
              </span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                defaultValue={email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button type="submit" className="py-2 bg-blue-600 text-white w-full">
          Add Propery
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
