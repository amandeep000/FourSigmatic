import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;

        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
        state.totalQuantity -= 1;
      } else {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id // ✅ Fixed
        );
      }
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
