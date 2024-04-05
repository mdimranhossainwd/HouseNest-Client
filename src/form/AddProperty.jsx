import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const AddProperty = () => {
  const axios = useAxios();
  const handleAddProperty = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.img.value;
    const location = form.location.value;
    const email = form.email.value;
    const agent = form.agent.value;
    const price = form.price.value;

    const addPrpertyData = {
      title,
      img,
      location,
      email,
      agent,
      price,
    };

    axios.post("/addproperty", addPrpertyData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Agent Add This Property 👍");
      }
    });
  };

  return (
    <div>
      <div className="bg-[#F8F8F8] px-12 py-8 mt-6 col-span-5">
        <h2 className="text-4xl font-semibold mb-12 text-center">
          Agent Add Property !!
        </h2>
        <form onSubmit={handleAddProperty}>
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
                  placeholder="Type Title"
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
                  placeholder="Property Locations"
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
                  placeholder="Your Img Link"
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
                  placeholder="Agent Name"
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
                  placeholder="Type agent email here ... "
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
                  placeholder="Property Price Range"
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
    </div>
  );
};

export default AddProperty;
