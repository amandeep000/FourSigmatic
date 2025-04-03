import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  isLoaded: false,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.isLoaded = true;
    },
  },
});

export const { setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
