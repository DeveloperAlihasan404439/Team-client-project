import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


function useReview() {
    const axiosPublick = useAxios()
    const {data: review=[], isLoading, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async() =>{
            const {data} = await axiosPublick.get('/review')
            return data
        },
      })
    return {review,isLoading,refetch};
}

export default useReview;