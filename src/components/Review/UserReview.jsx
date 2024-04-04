import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const UserReview = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const review = form.review.value;
    const date = form.date.value;
    const star = form.star.value;

    const reviewData = { email: user?.email, title, name, review, date, star };

    axios
      .post("/review", reviewData)
      .then((res) => {
        if (res.data.acknowledged > 0) {
          toast.success("User Review Added");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="bg-[#F8F8F8] px-12 py-8 col-span-5">
        <h2 className="text-4xl font-semibold mb-4 text-center">
          Review Added to Users !!
        </h2>
        <form onSubmit={handleAddReview}>
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
                  Agent Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Agent Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2">
                  Title
                </span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  placeholder="Type Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2">
                  Rating
                </span>
              </label>
              <select type="text" className="px-3 py-3" name="star" id="cars">
                <option value="">Select</option>
                <option value="">1 Star</option>
                <option value="">2 Star</option>
                <option value="">3 Star</option>
                <option value="">4 Star</option>
                <option value="">5 Star</option>
              </select>
            </div>
          </div>
          {/* form supplier row */}
          <div className="mb-8 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-semibold mb-2">
                  Type your Review
                </span>
              </label>
              <label className="input-group">
                <textarea
                  name="review"
                  className="p-6"
                  id=""
                  cols="70"
                  rows="10"
                ></textarea>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Send Review"
            className="py-2 bg-blue-600 text-white w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UserReview;
