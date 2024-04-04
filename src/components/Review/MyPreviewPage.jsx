import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import UserReviewCard from "./UserReviewCard";

const MyPreviewPage = () => {
  const axios = useAxios();
  const [review, setIsReview] = useState([]);

  axios.get("/review").then((res) => {
    setIsReview(res.data);
  });

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-12">
        My Review Page
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
        {review.map((review) => (
          <UserReviewCard key={review._id} reviews={review} />
        ))}
      </div>
    </div>
  );
};

export default MyPreviewPage;
