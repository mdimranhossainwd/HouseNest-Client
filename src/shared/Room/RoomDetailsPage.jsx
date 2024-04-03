import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { IoLocationSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import RoomReview from "./RoomReview";
const roominfoDetailsPage = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const roominfo = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);

  const { _id, img, pricing, location, verification_status } = roominfo || {};

  const handleAddWishlist = (e) => {
    if (user && user?.email) {
      const WishlistInfo = {
        wishlistID: _id,
        img,
        pricing,
        name: user?.displayName,
        photo: user?.photoURL,
        email: user?.email,
        location,
        verification_status,
        user: user?.email,
      };
      axios.post("/wishlists", WishlistInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("This Property Added to Wishlist");
        }
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>HouseNest || Room Details Page </title>
      </Helmet>
      <div className="container mx-auto">
        <div className="mt-8 mb-12">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-semibold">
              {roominfo?.location?.city}
            </h3>
            <span className="text-3xl font-medium">
              {roominfo?.pricing?.price}
            </span>
          </div>
          <div className="flex gap-3 py-6">
            <button className="bg-blue-600 px-3 py-1 rounded-md border-none text-white border-0">
              Featured
            </button>
            <button className="bg-black px-3 py-1 rounded-md border-none text-white border-0">
              For Sale
            </button>
          </div>
          <p className="flex items-center gap-4 text-[#636363]">
            <IoLocationSharp /> 94 Mercer Street, 627 Broadway,{" "}
            {roominfo.location?.state}
          </p>
          <img
            src={roominfo?.img}
            className="max-h-[420px] w-full object-cover mt-8"
            alt=""
          />
          <div>
            <h4 className="text-3xl font-semibold pb-4 pt-7">Descriptions</h4>
            <hr />
            <p className="pt-4">
              The focal point of the roominfo is a plush, sectional sofa that
              effortlessly accommodates both social gatherings and moments of
              solitude. Adorned with throw pillows in vibrant hues, the sofa
              serves as a chic statement piece, while its generous proportions
              ensure ample seating for all. Strategically placed, a coffee table
              takes center stage, offering a surface for both decor and
              functionality. Its sleek design complements the roominfo's
              aesthetic, providing a convenient space for books, decorative
              items, or a tray of refreshments. Technological integration is
              seamlessly woven into the roominfo's fabric, with a
              state-of-the-art entertainment center discreetly nestled against
              one wall. This feature includes a large high-definition
              television, surround sound system, and streaming capabilities,
              ensuring that the roominfo is a hub for entertainment and
              relaxation. The roominfo's versatility is further accentuated by
              flexible lighting options. <br /> <br />
              Elegant pendant lights illuminate specific areas, while floor and
              table lamps offer adjustable brightness, catering to diverse moods
              and occasions. Intricately chosen art pieces and decor accents
              adorn the walls, contributing to the roominfo's personality and
              creating points of visual interest. The overall design is a
              testament to the thoughtful curation of elements, striking a
              delicate balance between functionality and aesthetics. In
              conclusion, this living roominfo transcends its utilitarian
              purpose, evolving into a space that embodies comfort, style, and
              adaptability. It stands as a testament to the art of interior
              design, where each element harmonizes to create an environment
              that is not just a roominfo but a curated experience.
            </p>
          </div>
          <button
            onClick={handleAddWishlist}
            className="bg-blue-600 text-white px-4 py-2 border-0 rounded-md mt-12 border-none"
          >
            Add To Wishlist
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white px-4 py-2 ml-6 border-0 rounded-md mt-12 border-none"
          >
            Add Review
          </button>
          <RoomReview isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default roominfoDetailsPage;
