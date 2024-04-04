import { instance } from "../hooks/useAxios";
export const getRole = async (email) => {
  const { data } = await instance(`/roleuser/${email}`);
  return data;
};
