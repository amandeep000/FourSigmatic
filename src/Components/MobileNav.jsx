import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

const MobileNav = () => {
  return (
    <aside className="absolute top-[112px] w-full h-full z-50 bg-slate-500">
      <div className="flex flex-col justify-center items-start py-4 gap-6">
        {/* close button */}
        <div className="flex justify-start items-center w-full px-[30px]">
          <button className="p-1">
            <RxCross2 className="w-6 h-6 text-[#59432D] font-semibold" />
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
          <div>
            <button>Shop All</button>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default MobileNav;
