import FeaturedPostCard from "./CardFeaturedPost";

export default function FeaturedPosts() {
  return (
    <section className="my-15 md:my-35">
      <div className="mx-auto flex flex-col justify-center items-center font-[Montserrat]  w-[260px]  text-center gap-5 md:w-[30vw]">
        <h6 className="text-sm text-[#23A6F0] font-bold">Practice Advice</h6>
        <h2 className="text-[40px] font-bold text-[#252B42] leading-[50px]">
          Featured Posts
        </h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between{" "}
          <br className="hidden md:flex" /> the two major realms of Classical
          physics: Newtonian mechanics
        </p>
      </div>
      <FeaturedPostCard />
    </section>
  );
}
