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
      <div className="hidden md:flex flex-row items-center justify-between md:bg-[#252B42] px-10 py-5 text-white text-sm font-bold font-[Montserrat]">
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
        <div className="hidden md:flex  justify-between items-center gap-5  font-[Montserrat] text-xsm text-[#737373] ">
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
                      to="/shop/women/bags"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Bags
                    </Link>
                    <Link
                      to="/shop/women/belts"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Belts
                    </Link>
                    <Link
                      to="/shop/women/cosmetics"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Cosmetics
                    </Link>
                    <Link
                      to="/shop/women/shoes"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Shoes
                    </Link>
                    <Link
                      to="/shop/women/hats"
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
                      to="/shop/men/bags"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Bags
                    </Link>
                    <Link
                      to="/shop/men/belts"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Belts
                    </Link>
                    <Link
                      to="/shop/men/cosmetics"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Cosmetics
                    </Link>
                    <Link
                      to="/shop/men/shoes"
                      onClick={toggleMenu}
                      className="hover:font-normal"
                    >
                      Shoes
                    </Link>
                    <Link
                      to="/shop/men/hats"
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
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/about" ? "font-normal" : "font-bold"
            }`}
          >
            About
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/blog" ? "font-normal" : "font-bold"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/contact" ? "font-normal" : "font-bold"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/pages"
            onClick={() => setIsOpen(false)}
            className={`${
              location.pathname === "/pages" ? "font-normal" : "font-bold"
            }`}
          >
            Pages
          </Link>
        </div>
        <div className="flex gap-5 md:gap-7 text-[#252B42] md:text-[#23A6F0]">
          <Link
            to="/profile"
            className="flex gap-1 content-center items-center "
          >
            <CircleUserRound />
            <p className="hidden md:flex text-[#23A6F0] font-bold">
              Login/Register
            </p>
          </Link>
          {/* search kısmı çözülecek. Tıklanınca ne olacağına bakılacak */}
          <Search />
          <Link to="/cart" className="flex gap-1 content-center items-center">
            <ShoppingCart />
            <p className="hidden md:flex">1</p>
          </Link>
          <Menu onClick={toggleMenu} className="md:hidden" />
          <Link
            to="/likes"
            className="hidden md:flex gap-1 content-center items-center"
          >
            <Heart />
            {/* beğeni sayısı çekilecek */}
            <p>1</p>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between items-center gap-10 px-10 py-20 font-[Montserrat] text-3xl text-[#737373] md:hidden">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "font-normal" : "font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            to="/product"
            className={`${
              location.pathname === "/product" ? "font-normal" : "font-bold"
            }`}
          >
            Product
          </Link>
          <Link
            to="/pricing"
            className={`${
              location.pathname === "/pricing" ? "font-normal" : "font-bold"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
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
