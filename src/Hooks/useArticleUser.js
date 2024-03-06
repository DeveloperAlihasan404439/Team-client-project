import useAxios from './useAxios';
import useAuth from '../shared/Auth/useAuth';
import { useQuery } from '@tanstack/react-query';

export default function useArticleUser() {
    const axiosPublick = useAxios()
    const {user} = useAuth()
    const {data: userArticle=[], isLoading, refetch } = useQuery({
        queryKey: ['article', user?.email],
        queryFn: async() =>{
            const {data} = await axiosPublick.get(`/article/user?email=${user?.email}`)
            return data
        },
      })
    return {userArticle,isLoading,refetch};
}