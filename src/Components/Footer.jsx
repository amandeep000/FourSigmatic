import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 relative mt-36">
      <div className="absolute top-0 left-0 w-full">
        <img
          src="/public/enhanced coffee/svgviewer-png-output (1).svg"
          alt=""
          className="rotate-180 w-full"
        />
      </div>
      <div className="w-full h-full pt-6 pb-3 bg-[#8c663f]">
        <div className="px-[30px]">
          <div className="flex justify-center items-center">
            <span className="block h-[60px] w-[231px]">
              <img
                src="/public/enhanced coffee/Logo_White.svg"
                alt=""
                className="w-full"
              />
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-y-16 mt-16">
            <div className="flex justify-around items-center w-full">
              <span>
                {" "}
                <FaInstagram
                  className="text-[#59483D] p-2 bg-white rounded-full "
                  size={45}
                />
              </span>
              <span>
                {" "}
                <FaTiktok
                  className="text-[#59483D] p-2 bg-white rounded-full "
                  size={45}
                />
              </span>
              <span>
                {" "}
                <FaYoutube
                  className="text-[#59483D] p-2 bg-white rounded-full "
                  size={45}
                />
              </span>
              <span>
                {" "}
                <FaFacebook
                  className="text-[#59483D] p-2 bg-white rounded-full "
                  size={45}
                />
              </span>
            </div>
            {/* accordian */}
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
