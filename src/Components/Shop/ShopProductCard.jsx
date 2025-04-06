import React from "react";
import ProductCard from "../ProductCard";

const ShopProductCard = ({ category_name, product_category }) => {
  return (
    <div className="px-[30px]">
      <div className="mb-16">
        <h2 className="mb-8 border-b border-[#B89A75] text-3xl font-semibold text-[#59432D] pb-2">
          {category_name}
        </h2>
      </div>
      <div className="flex gap-8 justify-center lg:justify-start items-center flex-wrap">
        {product_category.map((item) => (
          <ProductCard product={item} width="w-[330px]" height="h-[330px]" />
        ))}
      </div>
    </div>
  );
};

export default ShopProductCard;
