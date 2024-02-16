import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useUsers = () => {
    const axiosPublick = useAxios()
    const {data: usersData=[], isLoading,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const {data} = await axiosPublick.get('/users')
            return data
        },
      })
    return {usersData,isLoading,refetch};
};

export default useUsers;