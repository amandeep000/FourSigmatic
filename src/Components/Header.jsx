import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobilenavOpen, setIsMobilenavOpen] = useState(false);

  return (
    <header className="mx-auto w-full bg-[#f9f5ed] sticky">
      <div>
        <p className="text-[#59432D] text-center py-3 bg-[#FAE9C8]">
          Feel The Difference In 7 Days Or Get Your Money Back.|{" "}
          <span className="underline">Shop Now</span>
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto py-2 flex items-center px-[30px] h-[64px] lg:h-[96px]">
        {/* ham icon */}
        <button
          type="button"
          onClick={() => {
            setIsMobilenavOpen(true);
            console.log("Ham clicked");
          }}
          className="flex-1 lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#59432D"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <nav className="hidden lg:flex justify-start items-center gap-6 flex-1 text-[20px] text-[#59433D] font-medium">
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/about"}>About</Link>
        </nav>
        <div className="flex-1 flex justify-center items-center">
          <Link to={"/"}>
            <img src={logo} alt="" width={155} height={40} />
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:flex justify-center items-center gap-10">
            {/* Search icon */}
            <Link to={"/search"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#59432D"
                className="lg:size-7 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Link>
            {/* location icon */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#59432D"
                className="lg:size-7"
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
            {/* user icon */}
            <span className="pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#59432D"
                className="lg:size-7"
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
          <div className="lg:border-l-slate-300 lg:border-l-2 lg:pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#59432D"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
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
