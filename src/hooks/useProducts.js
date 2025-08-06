import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products");
      console.log("Error", res.data);
      return res.data.products;
    },
    staleTime: 1000 * 60 * 5,
  });
};
