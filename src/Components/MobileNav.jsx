import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const MobileNav = ({ isMobilenavOpen, setIsMobilenavOpen }) => {
  useEffect(() => {
    console.log("checking if isMobileNav is true", isMobilenavOpen);
    if (isMobilenavOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isMobilenavOpen) {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobilenavOpen]);
  return (
    <aside
      className={`absolute top-[112px] right-0 w-full h-[calc(100vh - 112px)] bg-red-500 opacity-30 z-[9999] pointer-events-none mb-3 overflow-y-auto transition-transform duration-300 ease-in-out transfor ${
        isMobilenavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start py-4 gap-6">
        {/* close button */}
        <div className="flex justify-start items-center w-full px-[30px]">
          <button
            type="button"
            onClick={() => {
              setIsMobilenavOpen(false);
              console.log("clicked close button");
            }}
            className="p-1 z-50"
          >
            <RxCross2 className="w-6 h-6 text-[#59432D] font-semibold z-50" />
          </button>
        </div>
        {/* nav accordion */}
        <ul className="w-full text-[#59432D]">
          <li className="flex justify-between w-full py-[10px] px-[20px] items-center gap-2 border-t border-b border-black">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/content/Mobile_nav_coffees.avif"
                alt="coffee"
                width={80}
              />
              <h2 className="text-xl font-semibold">Coffees</h2>
            </div>
            <span>
              <FaChevronDown fill="black" />
            </span>
          </li>
          {/* protein accordion */}
          <li className="flex justify-between items-center w-full py-[10px] px-[20px] gap-2 border-b border-black">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/content/Mobile_nav_Proteins.avif"
                alt="Proteins"
                width={80}
              />
              <h2 className="text-xl font-semibold">Proteins</h2>
            </div>
            <span>
              <FaChevronDown fill="black" />
            </span>
          </li>
          {/* supplements accordion */}
          <li className="flex justify-between items-center w-full py-[10px] px-[20px] gap-2 border-b border-black">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/content/Mobile_nav_supplements.avif"
                alt="Supplements"
                width={80}
              />
              <h2 className="text-xl font-semibold">Supplements</h2>
            </div>
            <span>
              <FaChevronDown fill="black" />
            </span>
          </li>
          {/* shop all button */}
          <Link
            to={"/shop"}
            className="mt-[30px] mx-5 flex justify-center items-center border border-black rounded-3xl"
          >
            <button
              type="button"
              className="px-6 text-[#59432D] font-semibold w-full py-3 text-xl "
            >
              Shop All
            </button>
          </Link>
        </ul>
        {/* nav links */}
        <div className="flex justify-center flex-col items-start w-full text-xl cursor-pointer font-semibold text-[#59432D] px-5">
          <ul>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="mt-4">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="mt-4">
              <Link>Blog</Link>
            </li>
            <li className="mt-4">
              <Link>Press</Link>
            </li>
          </ul>
          {/* nav icons */}
          <ul className="mt-4 w-full">
            <li className="flex justify-start items-center mt-4 gap-4">
              <FaMapMarkerAlt />
              <span>Where to Buy</span>
            </li>
            <li className="flex justify-start items-center mt-4 gap-4">
              <FaSearch />
              <span>Search</span>
            </li>
            <li className="flex justify-start items-center mt-4 gap-4">
              <FaUser />
              <span>Account</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileNav;
