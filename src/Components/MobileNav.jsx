import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNav = ({ isMobilenavOpen, setIsMobilenavOpen }) => {
  useEffect(() => {
    if (isMobilenavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobilenavOpen]);

  const handleClicks = (e) => {
    const clickable = e.target.closest("a ,button");
    if (clickable) {
      setIsMobilenavOpen(false);
    }
  };

  return (
    <aside
      className={`fixed top-[112px] left-0 right-0 w-full h-[calc(100vh-112px)] bg-slate-50 transition-transform duration-300 ease-in-out z-50 ${
        isMobilenavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Mobile Navigation Menu"
    >
      <div className="h-full overflow-y-auto px-5 py-4 space-y-6">
        {/* Close Button */}
        <div className="flex justify-start items-center">
          <button
            onClick={() => setIsMobilenavOpen(false)}
            className="p-1"
            aria-label="Close Mobile Menu"
          >
            <RxCross2 className="w-6 h-6 text-[#59432D]" />
          </button>
        </div>

        {/* Accordion Section */}
        <ul
          className="text-[#59432D] space-y-2"
          aria-label="Product Categories"
        >
          {[
            { title: "Coffees", img: "Mobile_nav_coffees.avif" },
            { title: "Proteins", img: "Mobile_nav_Proteins.avif" },
            { title: "Supplements", img: "Mobile_nav_supplements.avif" },
          ].map(({ title, img }, i) => (
            <li
              key={i}
              className="flex justify-between items-center border-t border-black py-3"
              aria-label={`${title} Category`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={`/content/${img}`}
                  alt={title}
                  width={80}
                  loading="lazy"
                  aria-label={`${title} category image`}
                />
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <FaChevronDown className="text-black" />
            </li>
          ))}
        </ul>

        {/* Shop All Button */}
        <Link
          to="/shop"
          className="flex justify-center items-center border border-black rounded-3xl overflow-hidden"
          aria-label="Shop All Products"
        >
          <button
            className="px-6 py-3 text-[#59432D] font-semibold text-xl w-full hover:bg-[#59432D] hover:text-white transition duration-300 ease-in-out"
            onClick={handleClicks}
          >
            Shop All
          </button>
        </Link>

        {/* Nav Links */}
        <ul
          onClick={handleClicks}
          className="text-[#59432D] text-xl font-semibold space-y-4 z-50"
          aria-label="Navigation Links"
        >
          <li>
            <Link to="/about" aria-label="Go to About Us page">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/shop" aria-label="Go to Shop page">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/" aria-label="Go to Blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" aria-label="Go to Press section">
              Press
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div
          onClick={handleClicks}
          className="space-y-4 text-[#59432D] font-semibold cursor-pointer z-50"
          aria-label="Utility Links"
        >
          <Link
            className="flex items-center gap-4"
            aria-label="Find Where to Buy"
          >
            <FaMapMarkerAlt /> <span>Where to Buy</span>
          </Link>
          <Link
            to="/search"
            className="flex items-center gap-4"
            aria-label="Search Products"
          >
            <FaSearch /> <span>Search</span>
          </Link>
          <Link className="flex items-center gap-4" aria-label="Go to Account">
            <FaUser /> <span>Account</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default MobileNav;
