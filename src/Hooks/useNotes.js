import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useNotes = () => {
    const {user} = useContext(AuthContext)
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