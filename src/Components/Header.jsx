import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { openCart } from "./store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [isMobilenavOpen, setIsMobilenavOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="mx-auto w-full bg-[#f9f5ed] sticky top-0 z-50">
      <div>
        <p className="text-[#59432D] text-center text-[12px] lg:text-base py-3  bg-[#FAE9C8]">
          Feel The Difference In 7 Days Or Get Your Money Back.{" "}
          <Link to={"/shop"} className="underline" aria-label="Shop now">
            Shop Now
          </Link>
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto py-2 flex items-center px-[30px] h-[64px] lg:h-[96px]">
        {/* ham icon */}
        <button
          type="button"
          aria-label="Open mobile navigation"
          onClick={() => setIsMobilenavOpen(true)}
          className="flex-1 lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#59432D"
            className="size-7"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <nav className="hidden lg:flex justify-start items-center gap-6 flex-1 text-[20px] text-[#59433D] font-medium">
          <Link to={"/shop"} aria-label="Shop page">
            Shop
          </Link>
          <Link to={"/about"} aria-label="About page">
            About
          </Link>
        </nav>

        <div className="flex-1 flex justify-center items-center">
          <Link to={"/"} aria-label="Homepage">
            <img
              src={logo}
              alt="Website logo"
              width={155}
              height={40}
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:flex justify-center items-center gap-4 ">
            <Link to={"/search"} aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#59432D"
                className="lg:size-11 cursor-pointer p-2 rounded-full hover:bg-[#FFE0C0] transition-all duration-300 ease-in-out"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Link>
            <span aria-label="Location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#59432D"
                className="lg:size-11 p-2 rounded-full hover:bg-[#FFE0C0] transition-all duration-300 ease-in-out cursor-pointer "
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <span className="pr-4" aria-label="User account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#59432D"
                className="lg:size-11 p-2 rounded-full hover:bg-[#FFE0C0] transition-all duration-300 ease-in-out cursor-pointer"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
          </div>

          {/* cart icon */}
          <div
            onClick={() => dispatch(openCart())}
            className="relative lg:border-l-slate-300 lg:border-l-2 lg:pl-5 cursor-pointer"
            aria-label="Open cart"
          >
            <img
              src="/content/shopping_cart_24dp_59432D_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Cart icon"
              loading="lazy"
            />
            {totalQuantity > 0 && (
              <div className="absolute -top-[11px] -right-[5px] p-2 bg-orange-400 rounded-full h-4 w-4 flex justify-center items-center">
                <p className="text-white text-[8px]">{totalQuantity}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileNav
        isMobilenavOpen={isMobilenavOpen}
        setIsMobilenavOpen={setIsMobilenavOpen}
      />
    </header>
  );
};

export default Header;
