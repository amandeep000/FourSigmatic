import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import { Link, useSearchParams } from "react-router-dom";
const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [defaultProduct, setDefaultProduct] = useState();
  // fetch data
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      })
      .catch((err) => console.error("Failed to fetch db.json", err));
  }, []);

  useEffect(() => {
    if (allProducts.length > 0) {
      const bundle = allProducts.find((item) => item.id === 19);
      setDefaultProduct(bundle);
    }
  }, [allProducts]);

  useEffect(() => {}, []);

  // filter the products based on search
  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(lowerQuery);
      });
      setFilteredProducts(filtered);
    }
  }, [query, allProducts]);
  return (
    <section>
      <div className="mt-6 mx-[30px] lg:mx-12">
        <div className="flex items-center gap-1 rounded-lg border border-orange-300 lg:border-0 lg:border-b lg:rounded-none">
          <span className="w-5 h-5 lg:hidden pl-2" aria-label="search">
            <FaSearch fill="orange" />
          </span>
          <input
            type="text"
            placeholder="Search"
            autoFocus
            value={query}
            onChange={(e) => {
              const value = e.target.value;
              if (value.trim()) {
                setSearchParams({ q: value });
              } else {
                setSearchParams({});
              }
            }}
            className="w-full border-0 bg-transparent py-2 px-3 focus:outline-none focus:border-none caret-orange-500 lg:text-7xl font-semibold text-[#59432D]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setSearchParams({})}
              className="w-6 h-full lg:hidden pr-2"
            >
              <FaTimes fill="orange" />
            </button>
          )}
        </div>
      </div>

      {/* search results */}
      {filteredProducts.length !== 0 && (
        <>
          {" "}
          <div className="mx-[30px] lg:mx-12 border-b border-[#59432D] flex justify-start lg:justify-between lg:border-none items-center mt-16 mb-8">
            <h3 className="font-semibold text-[#59432D]">Search Results</h3>
            <Link to={"/shop"}>
              <button
                type="button"
                className="hidden lg:block lg:border lg:border-[#59432D] text-[#59432D] hover:bg-[#59432D] hover:text-white lg:rounded-3xl lg:px-5 lg:py-2 transition duration-300 ease-in-out"
              >
                Shop All Products
              </button>
            </Link>
          </div>
          <div className="px-[30px]">
            <div className="flex gap-8 justify-center lg:justify-start items-center flex-wrap">
              {filteredProducts.map((item) => (
                <ProductCard
                  product={item}
                  width="w-[330px]"
                  height="h-[330px]"
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* starter kit and bundle */}
      {/* <div className="px-[30px] lg:px-12 mt-12">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-4xl font-semibold text-[#59432D]">Best Seller</h1>
          <Link
            to={"/shop"}
            className="hidden lg:block lg:border lg:border-[#59432D] text-[#59432D] hover:bg-[#59432D] hover:text-white lg:rounded-3xl lg:px-5 lg:py-2 transition duration-300 ease-in-out"
          >
            <span className="text-"> Shop All Products</span>
          </Link>
        </div>
        {defaultProduct && <ProductCard product={defaultProduct} />}
      </div> */}
    </section>
  );
};

export default SearchPage;
