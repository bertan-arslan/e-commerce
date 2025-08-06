import { Link } from "react-router-dom";

import {products} from "../../data/products.json"

export default function CardProduct() {
 
  return (
    <div className="my-10 mx-auto flex flex-wrap justify-center gap-5 w-full md:w-[70vw] lg:w-[1049px]">
      {products
        .filter((product) => product.sell_count > 700)
        .map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="flex flex-col items-center justify-start text-center gap-3 font-[Montserrat] w-[80vw] md:w-[240px] md:h-[520px] overflow-hidden"
          >
            <img
              src={product.images[0].url}
              className=" md:w-[240px] md:h-[320px] object-cover object-center"
              alt={product.name}
            />
            <h5 className="text-[#252B42] font-bold">{product.name}</h5>
            <p className="text-[#737373] font-bold text-sm line-clamp-2">
              {product.description}
            </p>
            <p className="text-[#BDBDBD] font-bold text-sm">
              ${product.price}
              <span className="text-[#23856D]"> ${product.price - 10}</span>
            </p>
          </Link>
        ))}
    </div>
  );
}
