import CategoryPick from "../components/home-components/CategoryPick";
import HeroSlider from "../components/home-components/HeroSlider";
import FavProducts from "../components/home-components/FavProducts";
import BottomSlider from "../components/home-components/BottomSlider";
import C2A from "../components/home-components/C2A";
import FeaturedPosts from "../components/home-components/FeaturedPosts";

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
