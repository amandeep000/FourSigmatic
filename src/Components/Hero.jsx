import React from "react";
import { FaStar } from "react-icons/fa";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-6 lg:py-3">
        {/* hero video */}
        <div className="w-full order-1 lg:order-2 lg:w-1/2 lg:pr-[25px] lg:h-[340px] xl:pr-[34px] xl:h-[374px]">
          <video
            src="/public/content/herobg.webm"
            muted
            autoPlay
            playsInline // to make sure that video runs on mobile devices
            loop
            poster="/public/content/Placeholder_herobg.webp"
            className="w-full lg:rounded-lg h-full object-cover"
          ></video>
        </div>
        {/* hero content */}
        <div className="w-full flex flex-col justify-center items-center order-2 lg:order-1 gap-3 lg:w-1/2">
          <div className="px-5 md:w-[525px] lg:ml-[25px] xl:max-w-[800px] xl:ml-[37px]">
            <h1 className="font-semibold text-center lg:text-start text-3xl w-full text-[#59432D] pl-4 lg:pl-0 lg:text-[42px] lg:mb-5 lg:leading-tight">
              Get Your Focus Without The Jitters
            </h1>
            <p className="text-lg text-center lg:text-start text-[#59432D] px-4 w-full mb-4 lg:px-0 lg:font-normal lg:mb-7 lg:text-xl">
              The Original Mushroom Coffee. Over 100 Million Cups Served
            </p>
            <div className="flex justify-center lg:justify-start mx-auto items-center mb-2 gap-2">
              <span className="flex">
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
              </span>
              <span>100,000+ Five Star Rating</span>
            </div>
            <button className="w-full mx-auto bg-[#8C6640] rounded-[5rem] mb-2 text-white lg:w-3/5 xl:w-2/5">
              <p className="px-[42px] py-[15px] w-full flex justify-between items-center text-lg lg:py-3 lg:px-8">
                Try It Now
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </p>
            </button>
          </div>
          <div className="w-full px-5 sm:px-8 mb-4">
            <div className="lg:hidden w-full border border-[#59432D] px-4 sm:px-7 py-1 order-3 text-center">
              <HeroSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
