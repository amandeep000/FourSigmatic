import React from "react";
import ProductCard from "../ProductCard";
import ShopProductCard from "./ShopProductCard";
function ShopProducts({
  category_title,
  category_para,
  product_category,
  category_name,
}) {
  return (
    //     this margin top is temporary
    <section className="mt-28">
      <div className="pb-24 px-[30px]">
        {/* make heading and paragraph below it dynamic according to each category */}
        <div className="mb-11 text-[#59432D]">
          <h1 className="text-5xl mb-6 lg:text-7xl font-semibold">
            {category_title}
          </h1>
          <div className="text-base leading-normal lg:w-1/2">
            <p>{category_para}</p>
          </div>
        </div>
        {/* from here starts the cards */}
        <ShopProductCard
          category_name={category_name}
          product_category={product_category}
        />
      </div>
    </section>
  );
}

export default ShopProducts;
