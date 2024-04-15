import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";

const MySolePage = () => {
  const axios = useAxios();

  const getPayment = async () => {
    const res = await axios.get("/payment");
    return res;
  };

  const { data: soldProperty } = useQuery({
    queryKey: "soleInfo",
    queryFn: getPayment,
  });

  return (
    <div className="mx-6">
      <h2 className="text-4xl font-semibold text-center my-12">
        My Sold Properties
      </h2>
      <div>
        <table className="table w-full">
          {/* head */}
          <thead className="bg-blue-400 text-white rounded-xl">
            <tr className="text-lg font-pt">
              <th>Title</th>
              <th>Location</th>
              <th>Email</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {soldProperty?.data?.map((item, index) => (
              <tr key={item._id}>
                <td className="font-medium text-[16px]">{item.title}</td>
                <td className="font-medium">{item.location}</td>
                <td className="text-md font-semibold"> {item?.mail}</td>
                <td className="text-md font-semibold">Jessica</td>
                <td className="text-md font-semibold"> {item.housePrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySolePage;
