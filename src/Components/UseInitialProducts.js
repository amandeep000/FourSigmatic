import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";

const UseInitialProducts = () => {
  const { isLoaded } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isLoaded]);
};

export default UseInitialProducts;
