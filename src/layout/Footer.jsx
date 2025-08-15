import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white font-[Montserrat] bg-[#252B42] px-20 pt-20 pb-5 ">
      <div className="max-w-[1050px] px-5 flex flex-col  gap-10 md:flex-row md:justify-around md:w-full md:m-auto">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Get In Touch</h3>
          <p className="text-sm">the quick fox jumps over the lazy dog</p>
          <nav className="flex gap-5">
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
              <FaXTwitter className="text-xl" />
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Company info</h3>
          <nav className="text-sm  flex flex-col gap-3">
            <Link to="/about">About us</Link>
            <Link
              to="/maintenance"
              //to="/carrier"
            >
              Carrier
            </Link>
            <Link
              to="/maintenance"
              //to="/hiring"
            >
              We are hiring
            </Link>
            <Link
              to="/maintenance"
              //to="/blog"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Features</h3>
          <nav className="text-sm flex flex-col gap-3">
            <Link to="/">About us</Link>
            <Link
              to="/maintenance"
              //to="/business-marketing"
            >
              Business Marketing
            </Link>
            <Link
              to="/maintenance"
              //to="/user-analytic"
            >
              User Analytic
            </Link>
            <Link
              to="/maintenance"
              //to="/live-chat"
            >
              Live Chat
            </Link>
            <Link
              to="/maintenance"
              //to="/support"
            >
              Unlimitted Support
            </Link>
          </nav>
        </div>
      </div>
      <p className="max-w-[1050px] mx-auto pt-30 flex items-center justify-center text-sm font-bold text-center">
        Made With Love By <br className="md:hidden" />
        Bertan ARSLAN <br className="md:hidden" />
        For Educational Purposes
      </p>
    </footer>
  );
}
