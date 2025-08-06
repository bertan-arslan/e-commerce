import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const useProductsPagination = (page = 1, limit = 12) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const offset = (page - 1) * limit;
      const res = await axiosInstance.get("/products", {
        params: { offset, limit },
      });
      return res.data;
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
};
