import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

export default function useArticle () {
    const axiosPublick = useAxios()
    const {data: article=[], isLoading, refetch } = useQuery({
        queryKey: ['article'],
        queryFn: async() =>{
            const {data} = await axiosPublick.get('/article')
            return data
        },
      })
    return {article,isLoading,refetch};
}
