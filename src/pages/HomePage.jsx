import CategoryPick from "../components/home/CategoryPick";
import HeroSlider from "../components/home/HeroSlider";
import FavProducts from "../components/home/FavProducts";
import BottomSlider from "../components/home/BottomSlider";
import C2A from "../components/home/C2A";
import FeaturedPosts from "../components/home/FeaturedPosts";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <CategoryPick />
      <FavProducts />
      <BottomSlider />
      <C2A />
      <FeaturedPosts />
    </main>
  );
}
