export default function C2A() {
  return (
    <section className="font-[Montserrat] pt-20 pb-10 flex flex-col items-center justify-center md:flex-row-reverse md:justify-around md:p-0">
      <div className="px-20 flex flex-col justify-center items-center gap-5 text-center md:text-left  md:w-[573px] md:items-start md:pl-0">
        <div className="flex flex-col gap-5">
          <h5 className=" text-[#BDBDBD]">SUMMER 2025</h5>
          <h2 className="text-[40px] font-bold leading-[50px]">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-xl">
            We know how large objects will act,<br className="hidden md:flex"/> but things on a small scale.
          </h4>
        </div>
        <div className="flex flex-col items-center gap-5 font-bold text-sm md:flex-row md:items-start ">
          <button className="h-[50px] w-[150px] text-white bg-[#2DC071] rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#2DC071] hover:border">
            BUY NOW
          </button>
          <button className="h-[50px] w-[165px]  text-white bg-[#2DC071] rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#2DC071] hover:border">
            READ MORE
          </button>
        </div>
      </div>
      <div className="w-[414px] h-[403px]  md:h-[682px] md:w-[704px]">
        <img
          src="c2a.png"
          className="h-full w-auto object-cover overflow-visible -translate-x-7 md:overflow-hidden md:translate-x-0 md:-translate-y-[92px] md:h-[774px]"
        />
      </div>
    </section>
  );
}
