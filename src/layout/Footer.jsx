import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white font-[Montserrat] bg-[#23A6F0] px-20 pt-20 pb-5">
      <div className="px-5 flex flex-col  gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Get In Touch</h3>
          <p className="text-sm text-[#8EC2F2]">
            the quick fox jumps over the lazy dog
          </p>
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
              <FaTwitter className="text-xl" />
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Company info</h3>
          <nav className="text-sm text-[#8EC2F2] flex flex-col gap-3">
            <Link
              to="/maintenance"
              //to="/about"
            >
              About us
            </Link>
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
          <nav className="text-sm text-[#8EC2F2] flex flex-col gap-3">
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
      <p className="pt-30 flex items-center justify-center text-sm font-bold text-center">
        Made With Love By <br className="lg:hidden" />
        Bertan ARSLAN <br className="lg:hidden" />
        For Educational Purposes
      </p>
    </footer>
  );
}
