import useAuth from "../shared/Auth/useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useUserSingle = () => {
  const { user } = useAuth();
  const axiosPublick = useAxios();
  const {
    data: userSingle = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users single",user?.email],
    queryFn: async () => {
      const { data } = await axiosPublick.get(
        `/users/single?email=${user?.email}`
      );
      return data;
    },
  });
  return { userSingle, isLoading, refetch };
};

export default useUserSingle;
