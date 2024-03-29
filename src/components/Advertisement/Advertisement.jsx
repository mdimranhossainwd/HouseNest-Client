import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import CommonHeading from "../../shared/Heading/CommonHeading";
import RoomCard from "../Card/RoomCard";

const Advertisement = () => {
  const axios = useAxios();
  const houseProperty = async () => {
    const res = await axios.get("/advertisement");
    return res;
  };

  const { data: roomData } = useQuery({
    queryKey: ["roomInfo"],
    queryFn: houseProperty,
  });

  return (
    <div className="my-8 container mx-auto">
      <CommonHeading
        heading="Advertisements Properties"
        paragraph="With the features and filters provided with the Houzez widgets you
            can turn your visitors attention to the latest listings or the ones
            that are most profitable to buy at the moment."
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-12">
        {roomData?.data?.map((item) => (
          <RoomCard roominfo={item} key={item._id}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
