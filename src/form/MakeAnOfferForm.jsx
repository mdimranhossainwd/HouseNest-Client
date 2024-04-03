import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
const MakeAnOfferForm = () => {
  const axios = useAxios();
  const getRoom = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    wishlistID,
    img,
    pricing,
    name,
    photo,
    email,
    location,
    verification_status,
    user,
  } = getRoom || {};

  const handleMakeOffer = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const agentname = form.agentname.value;
    const date = form.date.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const buyername = form.buyername.value;

    const makeOfferValue = {
      title,
      img,
      location: location.state,
      verification_status,
      name,
      agentname,
      date,
      email,
      amount,
      buyername,
    };

    axios
      .post("/offer", makeOfferValue)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Make Offer Information Saved On DB");
          navigate("/dashboard/wishlist");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="bg-[#F8F8F8] px-12 py-8 col-span-5">
        <h2 className="text-4xl font-semibold mb-4 text-center">
          Make Offer Page ||
        </h2>
        <form onSubmit={handleMakeOffer}>
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
                  name="title"
                  defaultValue={getRoom?.location?.city}
                  className="input text-black input-bordered w-full"
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
                  name="name"
                  defaultValue={getRoom?.location?.state}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2">
                  Agent Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="agentname"
                  defaultValue={name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2">
                  Offer Amount
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="amount"
                  defaultValue={pricing.price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2">
                  Buyer Email
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
                  Buyer Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="buyername"
                  placeholder="Buyer Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form supplier row */}
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Buying Date
              </span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="date"
                placeholder="Buying Date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button type="submit" className="py-2 bg-blue-600 text-white w-full">
            Make Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnOfferForm;
