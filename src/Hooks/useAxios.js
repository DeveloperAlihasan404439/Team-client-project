import axios from "axios";
const axiosPublick = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://team-jet-eight.vercel.app",

});

const useAxios = () => {
    return axiosPublick;
};

export default useAxios;