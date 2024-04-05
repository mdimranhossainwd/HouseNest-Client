import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useProperty = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const { refetch, data: property = [] } = useQuery({
    queryKey: ["property", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/addproperty?email=${user.email}`);
      return res.data;
    },
  });

  return [property, refetch];
};

export default useProperty;
