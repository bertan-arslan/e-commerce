import {
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  Heart,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <header>
      <div className="hidden lg:flex flex-row gap-10 items-center justify-between lg:bg-[#252B42] px-10 py-5 text-white text-sm font-bold font-[Montserrat]">
        <div className="flex gap-1 items-center justify-center ">
          <Phone className="h-4" />
          <span>(225) 555-0118</span>
          <Mail className="h-4 ml-5" />
          <span>michelle.rivera@example.com</span>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <p>Follow Us</p>
          <p>:</p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-xl" />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl" />
          </a>

          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center px-10 py-5 shadow-md">
        <Link
          className="font-[Montserrat] text-2xl font-bold text-[#252B42]"
          to="/"
        >
          Bandage
        </Link>
        <div className="hidden lg:flex  justify-between items-center gap-5  font-[Montserrat] text-xsm text-[#737373] ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/" ? "font-normal" : "font-bold"
            } `}
          >
            Home
          </Link>
          <div className="relative flex">
            <button
              onClick={toggleMenu}
              className={`${
                isOpen ? "font-normal" : "font-bold"
              } text-[#737373] cursor-pointer`}
            >
              Shop
            </button>
            {isOpen ? (
              <ChevronUp onClick={toggleMenu} className="cursor-pointer" />
            ) : (
              <ChevronDown onClick={toggleMenu} className="cursor-pointer" />
            )}
            {isOpen && (
              <div className="absolute flex top-full mt-2  shadow-md gap-30 p-5 font-bold text-sm w-96 bg-white">
                <div className="flex flex-col justify-between gap-10 w-20">
                  <p className="text-[#252B42]">Women</p>
                  <div className="flex flex-col gap-5">
                    <Link
                      //to="/shop/women/bags"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Bags
                    </Link>
                    <Link
                      //to="/shop/women/belts"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Belts
                    </Link>
                    <Link
                      //to="/shop/women/cosmetics"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Cosmetics
                    </Link>
                    <Link
                      //to="/shop/women/shoes"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Shoes
                    </Link>
                    <Link
                      //to="/shop/women/hats"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Hats
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-10 w-20">
                  <p className="text-[#252B42]">Men</p>
                  <div className="flex flex-col gap-5">
                    <Link
                      //to="/shop/men/bags"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Bags
                    </Link>
                    <Link
                      //to="/shop/men/belts"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Belts
                    </Link>
                    <Link
                      //to="/shop/men/cosmetics"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Cosmetics
                    </Link>
                    <Link
                      //to="/shop/men/shoes"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Shoes
                    </Link>
                    <Link
                      //to="/shop/men/hats"
                      to="/maintenance"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Hats
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            //to="/about"
            to="/maintenance"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/about" ? "font-normal" : "font-bold"
            }`}
          >
            About
          </Link>
          <Link
            //to="/blog"
            to="/maintenance"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/blog" ? "font-normal" : "font-bold"
            }`}
          >
            Blog
          </Link>
          <Link
            //to="/contact"
            to="/maintenance"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/contact" ? "font-normal" : "font-bold"
            }`}
          >
            Contact
          </Link>
          <Link
            //to="/pages"
            to="/maintenance"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/pages" ? "font-normal" : "font-bold"
            }`}
          >
            Pages
          </Link>
        </div>
        <div className="flex gap-5 lg:gap-7 text-[#252B42] lg:text-[#23A6F0]">
          <Link
            //to="/profile"
            to="/maintenance"
            className="flex gap-1 content-center items-center "
          >
            <CircleUserRound />
            <p className="hidden lg:flex text-[#23A6F0] font-bold">
              Login/Register
            </p>
          </Link>
          {/* search kısmı çözülecek. Tıklanınca ne olacağına bakılacak */}
          <Search />
          <Link
            //to="/profile/cart"
            to="/maintenance"
            className="flex gap-1 content-center items-center"
          >
            <ShoppingCart />
            {/* beğeni sayısı çekilecek */}
            <p className="hidden lg:flex">1</p>
          </Link>
          <Menu onClick={toggleMenu} className="lg:hidden" />
          <Link
            //to="/profile/likes"
            className="hidden lg:flex gap-1 content-center items-center"
          >
            <Heart />
            {/* beğeni sayısı çekilecek */}
            <p>1</p>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between items-center gap-10 px-10 py-20 font-[Montserrat] text-3xl text-[#737373] lg:hidden">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "font-normal" : "font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            //to="/product"
            to="/maintenance"
            className={`${
              location.pathname === "/product" ? "font-normal" : "font-bold"
            }`}
          >
            Product
          </Link>
          <Link
            //to="/pricing"
            to="/maintenance"
            className={`${
              location.pathname === "/pricing" ? "font-normal" : "font-bold"
            }`}
          >
            Pricing
          </Link>
          <Link
            //to="/contact"
            to="/maintenance"
            className={`${
              location.pathname === "/contact" ? "font-normal" : "font-bold"
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
