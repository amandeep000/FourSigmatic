import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "./store/productSlice";

const UseInitialProducts = () => {
  const { isLoaded } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      fetch("/db.json")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setProducts(data.products));
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [dispatch, isLoaded]);
};

export default UseInitialProducts;
