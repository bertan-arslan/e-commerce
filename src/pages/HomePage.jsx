import CategoryPick from "../components/CategoryPick";
import HeroSlider from "../components/HeroSlider";
import FavProducts from "../components/FavProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <CategoryPick />
      <FavProducts />
      <ProductCard />
    </main>
  );
}
