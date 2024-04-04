import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
  const axios = useAxios();
  const { user, loading } = useAuth();
  const [role, setIsRole] = useState(null);

  useEffect(() => {
    axios.get(`/roleusers/${user?.email}`).then((res) => {
      setIsRole(res.data.role);
    });
  }, [user]);
  return [role];
};

export default useRole;
