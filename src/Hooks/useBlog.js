import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
export default function useBlog() {
    const axiosPublick = useAxios()
    const {data: blog=[], isLoading, refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async() =>{
            const {data} = await axiosPublick.get('/blog')
            return data
        },
      })
    return {blog,isLoading,refetch};
}
