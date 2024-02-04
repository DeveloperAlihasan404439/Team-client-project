import axios from "axios";
const axiosPublick = axios.create({
  baseURL: "http://localhost:5000",
  // withCredentials: true
});

const useAxios = () => {
    return axiosPublick;
};

export default useAxios;