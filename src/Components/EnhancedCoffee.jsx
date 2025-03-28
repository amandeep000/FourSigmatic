import React from "react";
import Button from "./Button";

const EnhancedCoffee = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className=" max-w-[1180px]">
        <div className="px-8 flex flex-col w-full  justify-center items-center gap-y-6">
          <p className="text-[#F2983D] text-sm uppercase">coffee enhanced</p>
          <p className="text-[32px] text-[#59432D] font-semibold">
            Premium coffee with real benefits
          </p>
        </div>
        <div className="flex justify-center items-center p-6 bg-[#FAF3E0]">
          <div className="grid grid-cols-3 border border-black rounded-lg overflow-hidden bg-[#f9f5ed] shadow-lg">
            {/* Header */}
            <div className="p-4"></div>
            <div className="p-4 flex flex-col items-center">
              <img
                src="/public/coffeebenefits/comparison1.webp"
                alt="Premium Coffee"
                className="w-16 h-16 mb-2"
              />
              <p className="font-bold text-lg text-center w-full pt-2 text-[rgb(89,67,75)]">
                Premium Arabica
              </p>
            </div>
            <div className="p-4 flex flex-col items-center">
              <img
                src="/public/coffeebenefits/comparison2.webp"
                alt="Regular Coffee"
                className="w-16 h-16 mb-2"
              />
              <p className="font-bold text-lg text-center w-full pt-2 text-[rgb(89,67,75)]">
                Low Quality
              </p>
            </div>
            {/* Rows */}
            {[
              { label: "No Jitters", premium: true, regular: false },
              { label: "Positive Mood", premium: true, regular: false },
              { label: "Gut Support", premium: true, regular: false },
              { label: "Less Acidic", premium: true, regular: false },
              { label: "Organic", premium: true, regular: false },
            ].map((row, index) => (
              <div
                key={index}
                className="col-span-3 grid grid-cols-3 border-t border-black text-[(rgb(89,67,75))]"
              >
                <div className="p-4 text-center font-semibold bg-[#fae4a6] border-black border-r">
                  {row.label}
                </div>
                <div className="p-4 flex justify-center items-center bg-[#f2983d] border-black border-r">
                  {row.premium ? "✔️" : "❌"}
                </div>
                <div className="p-4 flex justify-center items-center">
                  {row.regular ? "✔️" : "❌"}
                </div>
              </div>
            ))}
            <div className="col-span-3 grid grid-cols-3 border-t border-black">
              <div className="p-4 text-center bg-[#fae4a6] font-semibold border-black border-r">
                100% Real Mushrooms
              </div>
              <div className="p-4 text-center bg-[#f2983d] font-semibold text-[(rgb(89,67,75))] border-black border-r">
                We use only the fruiting body extracts, no cheap mycelium.
              </div>
              <div className="p-4 text-center font-semibold  text-[(rgb(89,67,75))]">
                No mushrooms, no benefits.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto max-w-[500px] mt-4 ">
          <button className="w-full py-3 px-9 bg-[#59432D] flex justify-center text-white rounded-[5rem] cursor-pointer items-center">
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
