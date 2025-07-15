import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <div className="w-full   ">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="w-full h-[753px]"
        style={{ "--swiper-navigation-color": "#ffffff" }}
      >
        <SwiperSlide>
          <div className=" w-full h-full bg-[url(public/pruduct_slider.jpg)] bg-cover bg-[position:50%_center] text-white font-[Montserrat] flex flex-col items-center justify-center p-20 text-center gap-10 lg:bg-center lg:text-left lg:items-start">
            <h5 className="font-bold">SUMMER 2025</h5>
            <h2 className="font-bold text-[40px] lg:text-[58px]">NEW COLLECTION</h2>
            <h4 className="text-xl">
              We know how large objects will act, <br className="hidden lg:flex"/> but things on a small scale.
            </h4>
            <Link
              to="/maintenance"
              //to="/shop"
            >
              <button className="h-[62px] w-[221px] bg-[#2DC071] font-bold text-2xl rounded-md">
                SHOP NOW
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full bg-[url(public/pruduct_slider.jpg)] bg-cover bg-[position:50%_center]  text-white font-[Montserrat] flex flex-col items-center justify-center p-20 text-center  gap-10 lg:bg-center lg:text-left lg:items-start">
            <h5 className="font-bold">SUMMER 2025</h5>
            <h2 className="font-bold text-[40px]">NEW COLLECTION</h2>
            <h4 className="text-xl">
              We know how large objects will act, but things on a small scale.
            </h4>
            <Link
              to="/maintenance"
              //to="/shop"
            >
              <button className="h-[62px] w-[221px] bg-[#2DC071] font-bold text-2xl rounded-md">
                SHOP NOW
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
