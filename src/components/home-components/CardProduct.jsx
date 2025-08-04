import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/UseProduct";

export default function CardProduct() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div className="my-10 mx-auto flex flex-wrap justify-center gap-5 w-full md:w-[1124px]">
      {products
        .filter((product) => product.sell_count > 700)
        .map((p) => (
          <Link
            to="/shop"
            key={p.id}
            className="flex flex-col items-center justify-start text-center gap-3 font-[Montserrat] w-[240px] h-[520px] overflow-hidden"
          >
            <img
              src={p.images[0].url}
              className="w-[240px] h-[320px] object-cover object-center"
              alt={p.name}
            />
            <h5 className="text-[#252B42] font-bold">{p.name}</h5>
            <p className="text-[#737373] font-bold text-sm line-clamp-2">
              {p.description}
            </p>
            <p className="text-[#BDBDBD] font-bold text-sm">
              ${p.price}
              <span className="text-[#23856D]"> ${p.price - 10}</span>
            </p>
          </Link>
        ))}
    </div>
  );
}
