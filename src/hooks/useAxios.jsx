import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000/housenest/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error);
    }
  );

  return instance;
};

export default useAxios;
