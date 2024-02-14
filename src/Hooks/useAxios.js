import axios from "axios";
const axiosPublick = axios.create({
  // baseURL: "http://:5000",
  baseURL: "https://team-project-server.vercel.app",
});

const useAxios = () => {
    return axiosPublick;
};

export default useAxios;