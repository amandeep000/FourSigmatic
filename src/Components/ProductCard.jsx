import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="my-20 max-h-[427px] w-[315px]">
      <div
        className="relative h-[296px] w-[296px] max-h-[315px] max-w-[315px] transition duration-300 ease-in-out overflow-hidden rounded-xl cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {product.label && (
          <div className="absolute bg-[#8c663F] text-white top-2 left-3 py-[6px] px-3 text-sm rounded-3xl z-10">
            {product.label}
          </div>
        )}
        <img
          src={product.image[0]}
          alt={product.name}
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={product.image[1]}
          alt={product.name}
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="z-10 w-full absolute bottom-2 px-2">
          <button
            className={`w-full py-3 bg-white text-center text-sm font-semibold text-[#59432D] rounded-3xl transition-transform duration-300 ease-in-out hover:bg-[#8c663F] hover:text-[#FFFFFF] hover:transition-colors hover:duration-500 hover:ease-in-out ${
              isHovering
                ? "opacity-100 transform translate-y-0"
                : "transform translate-y-2 opacity-0"
            }`}
          >
            Quick Buy
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center items-center gap-x-2 text-[#59432D]">
          <span className="text-xl font-semibold">{product.name}</span>
          <div className="flex justify-center items-center gap-y-1">
            <span className="line-through text-gray-300 text-xl pr-1 font-semibold">
              ${product.actualPrice}
            </span>
            <span className="text-xl font-semibold">
              ${product.currentPrice}
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center gap-1 mt-2 text-xs font-mono font-semibold">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="border border-black py-[2px] px-3 rounded-3xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
