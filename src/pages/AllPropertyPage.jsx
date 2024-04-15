import { useQuery } from "@tanstack/react-query";
import AdminPropertyCard from "../components/Card/AdminPropertyCard";
import useAxios from "../hooks/useAxios";
import CommonHeading from "../shared/Heading/CommonHeading";

const AllPropertyPage = () => {
  const axios = useAxios();
  const getProperty = async () => {
    const res = axios.get("/allproperties");
    return res;
  };

  const { data: getAllProperty } = useQuery({
    queryKey: "propertyInfo",
    queryFn: getProperty,
  });

  return (
    <div className="my-12 container mx-auto">
      <CommonHeading
        heading="All Properties"
        paragraph="With the features and filters provided with the Houzez widgets you
            can turn your visitors attention to the latest listings or the ones
            that are most profitable to buy at the moment."
      />

      <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {getAllProperty?.data?.map((item) => (
          <AdminPropertyCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllPropertyPage;
