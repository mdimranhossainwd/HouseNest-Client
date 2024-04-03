import WishlistsCard from "../components/Card/wishlists/WishlistsCard";
import useRoom from "../hooks/useRooms";
import CommonHeading from "../shared/Heading/CommonHeading";

const WishlistPage = () => {
  const [room] = useRoom();
  console.log(room);

  return (
    <div>
      <div className="pt-20">
        <CommonHeading heading="Wishlists Item" />
      </div>
      <>
        <div className="border text-lg font-medium mx-8 border-blue-300 py-3 px-8 rounded lg ">
          <p>
            {" "}
            <span>⚠️</span> Demo mode is active! You cannot edit listing on Demo
            Site.
          </p>
        </div>
        <div>
          {room?.map((room) => (
            <WishlistsCard key={room?._id} room={room} />
          ))}
        </div>
      </>
    </div>
  );
};

export default WishlistPage;
