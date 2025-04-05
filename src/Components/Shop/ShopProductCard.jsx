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
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {product_category.map((item) => (
          <ProductCard product={item} width="w-[425px]" height="h-[425px]" />
        ))}
      </div>
    </div>
  );
};

export default ShopProductCard;
