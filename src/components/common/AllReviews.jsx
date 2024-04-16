import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AllReviewCard from "./AllReviewCard";

const AllReviews = () => {
  const axios = useAxios();

  const getAllReview = async () => {
    const res = await axios.get("/reviews");
    return res;
  };

  const { data: allReview } = useQuery({
    queryKey: ["reviewInfo"],
    queryFn: getAllReview,
  });

  return (
    <div className="mx-6">
      <h2 className="text-4xl font-semibold text-center my-12">
        Manage All Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allReview?.data?.map((item) => (
          <AllReviewCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
