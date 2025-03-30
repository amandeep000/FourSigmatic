import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import AccordionGroup from "./AccordionGroup";

const Footer = () => {
  return (
    <footer className="pt-16 relative mt-36">
      {/* <div className="absolute xs:top- sm:top-0 md:-top-4 left-0 w-full">
        <img
          src="/public/enhanced coffee/svgviewer-png-output (1).svg"
          alt=""
          className="rotate-180 w-full"
        />
      </div> */}
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
          <div className="w-full">
            <AccordionGroup />
          </div>
          <div className="w-full mt-16 text-white flex flex-col justify-start items-center">
            <div className="w-full flex justify-start">
              <button type="button" className="font-mono tracking-tighter">
                Accessibility Tool
              </button>
            </div>
            <div className="w-full flex justify-start flex-col space-y-1 font-sans">
              <p>©2025 Four Sigmatic. All rights reserved.</p>
              <p className="w-full">
                {" "}
                FAQ | Full Site Disclaimer | Privacy Policy | Sign Up | Terms of
                Service |
              </p>
              <p>Refund policy</p>
            </div>
          </div>
          <div className="text-white mt-6">
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
