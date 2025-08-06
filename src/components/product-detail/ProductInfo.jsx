import { Heart, ShoppingCart, Star } from "lucide-react";


export default function ProductInfo({product}) {
  const rating = Math.round(product.rating);

  return (
    <section className="flex flex-col w-[90vw] mx-auto my-20 gap-10 font-[Montserrat] text-[#252B42] md:flex-row md:w-[70vw] lg:w-[1049px]">
      <div className="flex flex-col gap-5 md:flex-row">
        <img
          src={product.images[0].url}
          className="md:w-[40%] object-contain"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-xl ">{product.name}</p>
            <div className="flex gap-2 items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < rating
                      ? `text-[#F3CD03] fill-[#F3CD03]`
                      : `text-[#F3CD03]`
                  }`}
                />
              ))}

              <p className="font-bold text-[#737373] text-sm">
                {product.sell_count} Reviews
              </p>
            </div>
            <p className="font-bold text-2xl">${product.price}</p>
            <p className="font-bold tex-sm text-[#737373]">
              Availablity:{" "}
              {product.stock > 0 ? (
                <span className="text-[#23A6F0]">In Stock</span>
              ) : (
                <span className="text-[#e92929]">Out of Stock</span>
              )}
            </p>
            <p className="text-[#858585]">{product.description}</p>
            <hr className="text-[#858585]" />
          </div>
          <div className="flex items-center gap-5 ">
            <button className="w-[148px] h-[44px] bg-[#23A6F0] rounded-[5px] font-bold text-sm text-white">
              BUY NOW
            </button>
            <button className="w-10 h-10 rounded-full border border-[#E8E8E8]">
              <Heart className="mx-auto" />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#E8E8E8]">
              <ShoppingCart className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
