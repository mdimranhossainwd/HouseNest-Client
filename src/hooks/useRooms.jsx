import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";

const useRoom = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const { refetch, data: room = [] } = useQuery({
    queryKey: ["room", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/wishlists?email=${user.email}`);
      return res.data;
    },
  });

  return [room, refetch];
};

export default useRoom;
