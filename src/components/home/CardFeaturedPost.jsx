import { ChevronRight, Clock2, MessageSquareText } from "lucide-react";
import posts from "../posts.js"

export default function FeaturedPostCard() {
  return (
    <div className="mx-auto mt-15 flex flex-col md:flex-row md:max-w-[1050px]">
      {posts.map((p, i) => (
        <div
          key={i}
          className="relative w-[330px] flex flex-col justify-center items-center mx-auto font-[Montserrat] text-[#737373]  border-neutral-200 border my-10 shadow-md"
        >
          <img src={p.imgUrl} className="w-[330px] h-[300px] object-cover" />
          <p className="w-14 h-6 absolute top-5 left-5 bg-[#E74040] rounded-md text-center text-white font-bold text-sm flex justify-center items-center ">
            NEW
          </p>
          <div className="p-6 flex flex-col gap-5">
            <nav className="w-full flex justify-start text-xs gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8EC2F2]"
              >
                Google
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Trending
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                New
              </a>
            </nav>
            <h4 className="font-bold text-xl text-black">{p.title}</h4>
            <p className="text-sm">{p.explanation}</p>
            <div className="flex justify-between">
              <div className="flex justify-center items-center gap-2">
                <Clock2 className="text-[#23A6F0] w-4 h-4" />
                <p className="text-xs">{p.date}</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MessageSquareText className="text-[#23856D] w-4 h-4" />
                <p className="text-xs">{p.comment} comments</p>
              </div>
            </div>
            <div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <p className="font-bold">Learn More</p>
                <ChevronRight className="text-[#23A6F0]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
