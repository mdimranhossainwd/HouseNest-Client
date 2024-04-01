import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const RoomReview = ({ isOpen, setIsOpen }) => {
  const axios = useAxios();

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const star = form.star.value;
    const date = form.date.value;
    const review = form.review.value;
    const allFormInfo = { title, name, star, date, review };

    axios.post("/reviews", allFormInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Thanks For Your Review");
      }
    });

    console.log(allFormInfo);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                          <select
                            className="px-3 py-3"
                            type="text"
                            name="star"
                            id="cars"
                          >
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      {/* form supplier row */}
                      <div className="md:flex mb-8">
                        <div className="form-control w-full">
                          <label className="label">
                            <span className="label-text text-xl font-semibold mb-2">
                              Type your Review
                            </span>
                          </label>
                          <label className="input-group">
                            <textarea
                              className="w-full p-4"
                              name="review"
                              id=""
                              cols=""
                              placeholder="Type you review here ...."
                              rows="10"
                            ></textarea>
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="py-2 bg-blue-600 text-white w-full"
                        onClick={closeModal}
                      >
                        Send Review
                      </button>
                    </form>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RoomReview;
