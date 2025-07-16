import productFavList from "../../data/ProductFavList";

export default function CardProduct() {
  return (
    <div className="md:flex md:flex-wrap md:items-center md:justify-center md:gap-5 md:w-[1124px] md:m-auto">
      {productFavList.map((p, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center text-center gap-3 font-[Montserrat] md:w-[240px] md:h-[615px]"
        >
          <img
            src={p.imgUrl}
            className="w-[240px] h-[427px] my-3 object-cover"
            alt={p.title}
          />
          <h5 className="text-[#252B42] font-bold">{p.title}</h5>
          <p className="text-[#737373] font-bold text-sm">{p.subtitle}</p>
          <p className="text-[#BDBDBD] font-bold text-sm">
            ${p.price}
            <span className="text-[#23856D]"> ${p.discountPrice}</span>
          </p>
          <div className="flex gap-2">
            {p.colorOptions.map((c, index) => (
              <div
                key={index}
                className="h-4 w-4 rounded-lg"
                style={{ backgroundColor: c }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
