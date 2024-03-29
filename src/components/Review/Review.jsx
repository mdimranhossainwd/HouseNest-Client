import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import CommonHeading from "../../shared/Heading/CommonHeading";
const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/public/data/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  console.log(review);

  return (
    <div>
      <CommonHeading
        heading="Clients Reviews"
        paragraph="he Houzez Grids widgets allow you to display property cities, types, status, etc within different grid style variations, colors and typography options"
      />

      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="text-center py-12 mt-6 bg-[#F8F8F8]"
        >
          {review.map((item) => (
            <SwiperSlide className="pb-6">
              <img
                className="mb-4 rounded-full h-24 object-cover w-24 mx-auto"
                src={item.img}
                alt=""
              />
              <h4 className="text-2xl mb-4 font-bold ">{item.name}</h4>
              <p className="text-xl mb-6 md:w-2/4 mx-auto font-medium">
                {item.description}
              </p>

              <h3 className="text-lg font-semibold text-blue-500 mb-3">
                {item.room_title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
