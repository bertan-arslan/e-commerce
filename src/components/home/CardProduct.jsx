import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import productsData from "../../products.json";
const products = productsData.products || [];


const slugify = (s = "") =>
  s
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function CardProduct() {
 
  const categories = useSelector((s) => s.category?.items || []);

  const buildProductUrl = (p) => {
    const cat = categories.find((c) => c.id === p.category_id);
    if (!cat) {
      
      return `/product/${p.id}`;
    }
    const genderPath = cat.gender === "k" ? "women" : "men";
    const categorySlug = slugify(cat.title);
    const productSlug = slugify(p.name);
    return `/shop/${genderPath}/${categorySlug}/${cat.id}/${productSlug}/${p.id}`;
  };

  return (
    <div className="my-10 mx-auto flex flex-wrap justify-center gap-5 w-full md:w-[70vw] lg:w-[1049px]">
      {products
        .filter((product) => product.sell_count > 700)
        .map((product) => (
          <Link
            to={buildProductUrl(product)}
            key={product.id}
            className="flex flex-col items-center justify-start text-center gap-3 font-[Montserrat] w-[80vw] md:w-[240px] md:h-[520px] overflow-hidden
                       cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition"
            title={product.name}
          >
            <img
              src={product.images?.[0]?.url}
              className="md:w-[240px] md:h-[320px] object-cover object-center"
              alt={product.name}
            />
            <h5 className="text-[#252B42] font-bold">{product.name}</h5>
            <p className="text-[#737373] font-bold text-sm line-clamp-2">
              {product.description}
            </p>
            <p className="text-[#BDBDBD] font-bold text-sm">
              ${Number(product.price).toFixed(2)}
              <span className="text-[#23856D]">
                {" "}
                ${Number(product.price - 10).toFixed(2)}
              </span>
            </p>
          </Link>
        ))}
    </div>
  );
}
