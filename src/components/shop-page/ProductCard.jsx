import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, List } from "lucide-react";

export default function ProductCard({ products }) {
  const [viewType, setViewType] = useState("grid");
  const [sortOrder, setSortOrder] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products
    .filter((product) => {
      const priceCheck =
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice));
      const categoryCheck =
        !selectedCategory || product.category_id === parseInt(selectedCategory);
      return priceCheck && categoryCheck;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Views:</span>
          <button
            onClick={() => setViewType("grid")}
            className={`border px-3 py-1 rounded ${
              viewType === "grid"
                ? "bg-gray-100 text-black font-bold"
                : "text-gray-500"
            }`}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setViewType("list")}
            className={`border px-3 py-1 rounded ${
              viewType === "list"
                ? "bg-gray-100 text-black font-bold"
                : "text-gray-500"
            }`}
          >
            <List size={16} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700"
          >
            <option value="">Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <button
            onClick={() => setFilterOpen((prev) => !prev)}
            className="bg-[#00aaff] text-white text-sm px-4 py-2 rounded hover:bg-[#0099dd] transition"
          >
            Filter
          </button>
        </div>
      </div>

      {filterOpen && (
        <div className="mb-6 p-4 border rounded bg-gray-50 w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Min Price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Max Price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="">All</option>
              <option value="1">T-shirt</option>
              <option value="2">Sweatshirt</option>
            </select>
          </div>
        </div>
      )}

      <div
        className={`${
          viewType === "list"
            ? "flex flex-col gap-5"
            : "flex flex-wrap justify-center gap-x-5 gap-y-6"
        }`}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`${
              viewType === "list"
                ? "w-full flex gap-4 p-4 border border-[#cecdcd] rounded items-center"
                : "w-full sm:w-[47%] md:w-[30%] lg:w-[22%] flex justify-center"
            }`}
          >
            {viewType === "list" ? (
              <Link
                to={`/product/${product.id}`}
                className="flex gap-4 items-center"
              >
                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex flex-col justify-between gap-1">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm text-[#BDBDBD] font-bold">
                    ${product.price.toFixed(2)}{" "}
                    <span className="text-sm text-[#23856D] font-bold">
                      ${(product.price - 10).toFixed(2)}
                    </span>
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                to={`/product/${product.id}`}
                className="flex flex-col items-center justify-start text-center gap-2 font-[Montserrat] w-full max-w-[240px] h-[520px] overflow-hidden"
              >
                <img
                  src={product.images?.[0]?.url}
                  className="w-full h-[320px] object-cover object-center"
                  alt={product.name}
                />
                <h5 className="text-[#252B42] font-bold">{product.name}</h5>
                <p className="text-[#737373] font-bold text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="text-[#BDBDBD] font-bold text-sm">
                  ${product.price.toFixed(2)}
                  <span className="text-[#23856D]">
                    {" "}
                    ${(product.price - 10).toFixed(2)}
                  </span>
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
