import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import AccordionGroup from "./AccordionGroup";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-5 mt-36 bg-[#8c663f]">
      {/* Wave SVG Shape at Top */}

      <div className="absolute top-0 left-0 w-full overflow-hidden z-10 leading-[0]">
        <svg
          className="relative block w-full h-[100px] overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9f5ed"
            d="M 1440 80 V 72 C 1440 72 746.5 0 430 0 C 113.5 0 0 48 0 48 V -200000 H 1440 Z"
          />
        </svg>
      </div>

      <div className="w-full h-full pt-6 px-6 lg:px-12 ">
        <div className="px-[30px]">
          {/* footer logo */}
          <div className="flex justify-center items-center">
            <span className="block h-[60px] w-[231px]">
              <img
                src="/public/enhanced coffee/Logo_White.svg"
                alt=""
                className="w-full"
              />
            </span>
          </div>
        </div>
        {/* social media and accordion section */}
        <div className="flex flex-col justify-center items-center w-full gap-y-16 mt-16 lg:flex-row lg:gap-x-14 lg:items-start">
          <div className="w-full md:w-3/4 lg:w-1/2 flex justify-center lg:items-start lg:mt-6">
            <div className="w-full flex justify-around items-center lg:justify-start lg:items-start lg:gap-x-4">
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
          </div>
          {/* links for lg screen */}
          <div className="hidden lg:flex justify-center items-center text-white gap-x-2 w-1/2">
            <div className="overflow-hidden max-w-[208px]">
              <span className="text-sm uppercase">shop</span>
              <ul className="mt-6 text-base">
                <li className="p-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Coffees & Creamers
                </li>
                <li className="p-[6px]">Protiens</li>
                <li className="p-[6px]">Supplements</li>
                <li className="p-[6px]">Shop All</li>
              </ul>
            </div>
            <div className="overflow-hidden max-w-[208px]">
              <span className="text-sm uppercase">learn</span>
              <ul className="mt-6 text-base ">
                <li className="p-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Product Quality
                </li>
                <li className="p-[6px]">About Us</li>
                <li className="p-[6px]">Blog</li>
                <li className="p-[6px]">Press</li>
              </ul>
            </div>
            <div className="overflow-hidden max-w-[208px]">
              <span className="text-sm uppercase">Support</span>
              <ul className="mt-6 text-base">
                <li className="p-[6px]">Contact Us</li>
                <li className="p-[6px]">FAQ</li>
                <li className="p-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Shipping & Return
                </li>
                <li className="p-[6px]">Account</li>
              </ul>
            </div>
            <div className="overflow-hidden max-w-[208px] flex flex-col items-start self-start">
              <span className="text-sm uppercase">INQUIRIES</span>
              <ul className="mt-6 text-base">
                <li className="p-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  Partners Zone
                </li>
                <li className="p-[6px]">Wholesale</li>
              </ul>
            </div>
          </div>
          {/* accordian */}
          <div className="w-full lg:hidden">
            <AccordionGroup />
          </div>
        </div>
        {/* T & C and bottom section */}
        <div className="w-full mt-16 text-white flex flex-col justify-start items-center">
          {/* Accessibility tool */}
          <div className="w-full flex justify-start lg:justify-center">
            <button type="button" className="font-mono tracking-tighter ">
              Accessibility Tool
            </button>
          </div>
          <div className="w-full flex justify-start flex-col space-y-1 font-sans lg:text-center">
            <p>©2025 Four Sigmatic. All rights reserved.</p>
            <p className="w-full">
              {" "}
              FAQ | Full Site Disclaimer | Privacy Policy | Sign Up | Terms of
              Service | Refund policy
            </p>
          </div>
          <div className="text-white mt-6 lg:text-center">
            <p className="text-[10px] font-mono">
              The statements made on this website have not been evaluated by the
              FDA (U.S. Food & Drug Administration). The products sold on this
              website are not intended to diagnose, treat, cure, or prevent any
              disease. The information provided by this website or this company
              is not a substitute for a face-to-face consultation with your
              physician, and should not be construed as individual medical
              advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
