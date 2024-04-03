import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import PropertyCard from "../PropertyCard";

const Property = () => {
  const axios = useAxios();
  const offerProperty = async () => {
    const res = axios.get("/offer");
    return res;
  };

  const { data: propertyData } = useQuery({
    queryKey: ["propertyInfo"],
    queryFn: offerProperty,
  });
  return (
    <div>
      <div className="container mx-auto mt-12">
        <h2 className="text-4xl font-semibold text-center">Property Brougth</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {propertyData?.data?.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Property;
