import React from "react";
import Button from "./Button";

const EnhancedCoffee = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <div className="w-full max-w-[1180px] md:px-[46px]">
        <div className="px-8 flex flex-col w-full  justify-center items-center gap-y-6">
          <p className="text-[#F2983D] text-sm uppercase">coffee enhanced</p>
          <p className="text-[32px] text-[#59432D] font-semibold">
            Premium coffee with real benefits
          </p>
        </div>
        <div className="pt-11 pb-6 flex justify-center items-center">
          {/* coffee quality column */}
          <div className="flex flex-col flex-grow-1 lg:w-[340px] justify-center items-center pt-[110px] text-lg font-semibold text-[#59432D]">
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border border-black border-r-0 w-full border-b-0 rounded-tl-[10px] bg-[#fae3a3]">
              <span>Coffee Quality</span>
            </div>
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border border-black w-full border-b-0 bg-[#fae3a3]">
              <span>No Jitters</span>
            </div>
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border border-black w-full border-b-0 bg-[#fae3a3]">
              <span>Positive Mood</span>
            </div>
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border border-black w-full border-b-0 bg-[#fae3a3]">
              <span>Gut Support</span>
            </div>
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border border-black w-full border-b-0 bg-[#fae3a3]">
              <span>Less Acidic</span>
            </div>
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border border-black w-full border-b-0 bg-[#fae3a3]">
              <span>Organic</span>
            </div>
            <div className="h-[70px] flex justify-center items-center px-4 py-4 border rounded-bl-[10px] border-black w-full bg-[#fae3a3]">
              <span>100% Real Mushrooms</span>
            </div>
          </div>
          {/* Premium coffee column */}
          <div className="w-[120px] lg:w-[194px] flex flex-col justify-center items-center shadow-[0px_4px_30px_10px_rgb(249,245,237)] bg-[#F2983D] rounded-l-[10px] rounded-r-[10px]">
            <div className="h-[110px] w-full flex flex-col justify-center items-center px-6">
              <img
                src="/enhanced coffee/768.webp"
                alt="coffee image"
                className="w-[75px] lg:h-[100px]"
              />
            </div>
            <div className="h-[70px] w-full bg-[#F2983D] flex justify-center items-center text-[#FFFFFFFF] border-b border-white">
              <p className="text-center pt-3 lg:pt-5 lg:text-[20px] font-semibold">
                Premium Arabica
              </p>
            </div>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-[70px] w-full bg-[#F2983D] border-b border-white"
                >
                  <img src="/coffeebenefits/true.svg" alt="icon" />
                </div>
              ))}
          </div>
          {/* Low quality column */}
          <div className="w-[120px] h-[110] lg:w-[194px] border-b-0 flex flex-col justify-center items-center bg-[#F9F5ED] rounded-l-[10px] rounded-r-[10px]">
            <div className="h-[110px] w-full flex flex-col justify-center items-center py-3 px-6 ">
              <img
                src="/enhanced coffee/Ground_Bag_Bad_copy.avif"
                alt="coffee bag image"
                className="lg:h-[76px]"
              />
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center h-[70px] w-full border border-l-0 border-[#59432D] ${
                    index === 0 ? "rounded-tr-[10px]" : ""
                  } ${index === 6 ? "rounded-br-[10px]" : ""} ${
                    index !== 6 ? "border-b-0" : ""
                  }`}
                >
                  <img src="/coffeebenefits/cross.svg" alt="icon" />
                </div>
              ))}
          </div>
        </div>
        <div className="w-full mx-auto max-w-[500px] mt-4 px-8 pb-6 ">
          <button className="w-full py-2 px-9 bg-[#59432D] flex justify-center text-white rounded-[5rem] cursor-pointer items-center">
            <p className="flex-1 font-semibold"> Upgrade your coffee</p>
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCoffee;
