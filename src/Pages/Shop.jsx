import React from "react";
import { useSelector } from "react-redux";
import ShopProducts from "../Components/Shop/ShopProducts";
import ShopProductCard from "../Components/Shop/ShopProductCard";

const Shop = () => {
  const { products } = useSelector((state) => state.products);
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
      paragraph: `Here’s the scoop: organic, plant-based protein that tastes great and benefits your body and mind.`,
      component: ShopProducts,
    },
    {
      name: "Supplement",
      title: "Supplements",
      paragraph: `Everything's better with mushrooms. Give your favorite rituals the power of adaptogens with our easy-to-add blends.`,
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
