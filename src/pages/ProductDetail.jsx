import FavProducts from "../components/home/FavProducts"
import ProductFooter from "../components/product-detail/ProductFooter";
import ProductInfo from "../components/product-detail/ProductInfo"
import productsData from "../data/products.json";

const product = productsData.products[1];

export default function ProductDetail(){
    return (
      <main>
        <ProductInfo product={product} />
        <ProductFooter product={product} />
        <FavProducts />
      </main>
    );
}