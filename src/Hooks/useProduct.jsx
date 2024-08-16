import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: product = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products')
            return res.data
        }
    })
    return [product, refetch]
};

export default useProduct;