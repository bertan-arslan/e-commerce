import { useState } from "react";
import { useProductsPagination } from "../hooks/useProductsPagination";
import ProductCard from "../components/shop-page/ProductCard";
import Pagination from "../components/shop-page/Pagination";


export default function ShopPage() {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data, isLoading, isError } = useProductsPagination(page, limit);
  const totalPages = Math.ceil((data?.total || 0) / limit);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Try again later.</p>
    );

  return (
    <main className="w-[90vw] max-w-[1200px] mx-auto py-10">
      <ProductCard products={data.products} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </main>
  );
}
