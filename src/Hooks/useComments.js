import { useQuery } from "@tanstack/react-query";

import useAxios from "./useAxios";

export default function useComments(id) {
  const axiosPublick = useAxios();
  const {
    data: comment = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["comment", id],
    queryFn: async () => {
      const { data } = await axiosPublick.get(`/comment/${id}`);
      return data;
    },
  });
  return { comment, isLoading, refetch };
}