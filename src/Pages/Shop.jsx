import React from "react";
import { useSelector } from "react-redux";
import ShopProducts from "../Components/Shop/ShopProducts";
import ShopProductCard from "../Components/Shop/ShopProductCard";

const Shop = () => {
  const { products } = useSelector((state) => state.products);
  // const coffee = products.filter((item) => item.category === "Coffees");
  // const creamers = products.filter((item) => item.category === "Creamer");
  // const protein = products.filter((item) => item.category === "Protein");
  // const supplement = products.filter((item) => item.category === "Supplement");
  // console.log(coffee);
  const categoriesData = [
    {
      name: "Coffees",
      title: "Coffees & Creamers",
      paragraph: `Expect more from your morning cup. Start your day with more
              energy, focus and a feel-good boost from mushrooms.`,
      component: ShopProducts,
    },
    {
      name: "Creamer",
      component: ShopProductCard,
    },
    {
      name: "Protein",
      title: "Protein",
      paragraph: `Description for protein products.`,
      component: ShopProducts,
    },
    {
      name: "Supplement",
      title: "Supplements",
      paragraph: `Information about our supplements.`,
      component: ShopProducts,
    },
  ];
  return (
    <div>
      {categoriesData.map((categoryInfo) => {
        const filteredProducts = products.filter(
          (item) => item.category === categoryInfo.name
        );
        if (categoryInfo.component === ShopProducts) {
          return (
            <ShopProducts
              key={categoryInfo.name}
              category_name={categoryInfo.name}
              category_title={categoryInfo.title}
              category_para={categoryInfo.paragraph}
              product_category={filteredProducts}
            />
          );
        } else if (categoryInfo.component === ShopProductCard) {
          return (
            <ShopProductCard
              key={categoryInfo.name}
              category_name={categoryInfo.name}
              product_category={filteredProducts}
            />
          );
        }
      })}
    </div>
  );
};

export default Shop;
