import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { setProducts } from "./store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductShowcase = () => {
  const dispatch = useDispatch();
  const { products, isLoaded } = useSelector((state) => state.products);

  useEffect(() => {
    if (!isLoaded) {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => dispatch(setProducts(data)))
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [dispatch, isLoaded]);
  return (
    <section>
      <div className="py-2rem">
        <Swiper>
          {products.slice(0, 7).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductShowcase;
