import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductShowcase = () => {
  const { products } = useSelector((state) => state.products);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Fetch product data only if not loaded

  return (
    <section className="relative w-full overflow-hidden">
      <div className="py-8 relative max-w-[100vw]">
        {/* Product Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            820: { slidesPerView: 2.3, spaceBetween: 28 },
            1024: { slidesPerView: 2.8, spaceBetween: 32 },
            1440: { slidesPerView: 3.7, spaceBetween: 36 },
            1920: { slidesPerView: 5, spaceBetween: 60 },
          }}
          className="!px-0"
        >
          {products.slice(0, 7).map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <ProductCard
                product={product}
                width="w-[350px]"
                height="h-[350px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Navigation Buttons */}
        <button
          ref={prevRef}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-[#59432D] rounded-full shadow-md hover:scale-110 transition-transform"
        >
          ←
        </button>
        <button
          ref={nextRef}
          aria-label="Next Slide"
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-[#59432D] rounded-full shadow-md hover:scale-110 transition-transform"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
