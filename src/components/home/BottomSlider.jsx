import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function BottomSlider() {
  return (
    <div className="relative w-full h-[1230px] overflow-hidden md:h-[709px]">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="w-full h-full"
        style={{
          "--swiper-navigation-color": "#ffffff",
          "--swiper-navigation-size": "32px",
          "--swiper-navigation-sides-offset": "15px",
        }}
      >
        <SwiperSlide>
          <div className=" w-full h-full pt-65 bg-[#23856D] text-white font-[Montserrat] flex flex-col items-center justify-center text-center gap-10 md:text-left md:items-center md:flex-row md:pt-0 md:gap-50">
            <div className="px-17  flex flex-col justify-center gap-10">
              <h5 className="font-bold md:text-xl">SUMMER 2025</h5>
              <h2 className="font-bold text-[40px] md:text-[58px]">
                Vita Classic <br className="hidden md:flex" />
                Product
              </h2>
              <h4 className="text-xl md:text-sm">
                We know how large objects will act,
                <br className="hidden md:flex" /> but things on a small scale.
              </h4>
              <div className="flex flex-col gap-10 items-center md:flex-row">
                <p className="font-bold text-2xl">$16.48</p>
                <button className="h-[52px] w-[181px] cursor-pointer bg-[#2DC071] font-bold text-sm rounded-md transition-colors duration-300 hover:text-[#2DC071] hover:bg-white hover:border-[#2DC071] ">
                  ADD TO CART
                </button>
              </div>
            </div>
            <img
              src="botom-slider.png"
              className="w-[416px] h-[681px] md:w-[443px] md:h-[685px] md:translate-y-20"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full pt-65 bg-[#23856D] text-white font-[Montserrat] flex flex-col items-center justify-center text-center gap-10 md:text-left md:items-center md:flex-row md:pt-0 md:gap-50">
            <div className="px-17  flex flex-col justify-center gap-10">
              <h5 className="font-bold md:text-xl">SUMMER 2025</h5>
              <h2 className="font-bold text-[40px] md:text-[58px]">
                Vita Classic <br className="hidden md:flex" /> Product
              </h2>
              <h4 className="text-xl md:text-sm">
                We know how large objects will act,
                <br className="hidden md:flex" /> but things on a small scale.
              </h4>
              <div className="flex flex-col gap-10 items-center md:flex-row">
                <p className="font-bold text-2xl">$16.48</p>
                <button className="h-[52px] w-[181px] cursor-pointer bg-[#2DC071] font-bold text-sm rounded-md transition-colors duration-300 hover:text-[#2DC071] hover:bg-white hover:border-[#2DC071] ">
                  ADD TO CART
                </button>
              </div>
            </div>
            <img
              src="botom-slider.png"
              className="w-[416px] h-[681px] md:w-[443px] md:h-[685px] md:translate-y-20"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
