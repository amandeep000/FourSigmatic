import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShopProducts from "../Components/Shop/ShopProducts";
import ShopProductCard from "../Components/Shop/ShopProductCard";

const Shop = () => {
  const { products, isLoaded } = useSelector((state) => state.products);
  const { category } = useParams();

  const categoriesData = [
    {
      name: "Coffees",
      title: "Coffees & Creamers",
      paragraph: `Expect more from your morning cup. Start your day with more energy, focus and a feel-good boost from mushrooms.`,
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

  const matchedCategory = categoriesData.find((cat) => cat.name === category);
  const filteredCategories = matchedCategory
    ? [matchedCategory]
    : categoriesData;

  if (!isLoaded || !products || products.length === 0) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  return (
    <div>
      {filteredCategories.map((categoryInfo) => {
        const filteredProducts = products.filter(
          (item) => item.category === categoryInfo.name
        );
        const Component = categoryInfo.component;
        return (
          <Component
            key={categoryInfo.name}
            category_name={categoryInfo.name}
            category_title={categoryInfo.title}
            category_para={categoryInfo.paragraph}
            product_category={filteredProducts}
          />
        );
      })}
    </div>
  );
};

export default Shop;
