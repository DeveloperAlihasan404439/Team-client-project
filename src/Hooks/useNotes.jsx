import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "../shared/Auth/useAuth";

const useNotes = () => {
    const {user} = useAuth()
    const axiosPublick = useAxios()
    const {data: notes=[], isLoading, refetch } = useQuery({
        queryKey: ['notes',user?.email],
        queryFn: async() =>{
            const {data} = await axiosPublick.get(`/notes?email=${user?.email}`)
            return data
        },
      })
    return {notes,isLoading,refetch};
};

export default useNotes;