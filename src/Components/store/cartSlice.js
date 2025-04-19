import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems"));
const initialState = {
  cartItem: storedCart?.cartItems || [],
  isCartOpen: false,
  totalQuantity: Number(storedCart?.totalQuantity) || 0,
  totalPrice: Number(storedCart?.totalPrice) || 0,
};

const saveCartToLocalStorage = (state) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify({
      cartItems: state.cartItem,
      totalQuantity: state.totalQuantity,
      totalPrice: state.totalPrice,
    })
  );
};

const getNumericPrice = (price) => {
  if (typeof price === "string") {
    return parseFloat(price.replace(/[^0-9.]/g, ""));
  }
  return price;
};

// extra safety helper
const clampCartValues = (state) => {
  state.totalQuantity = Math.max(0, state.totalQuantity);
  state.totalPrice = Math.max(0, state.totalPrice);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addToCart: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload.id);
      const numericPrice = getNumericPrice(action.payload.currentPrice);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += numericPrice;
      clampCartValues(state);
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItem.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        const numericPrice = getNumericPrice(itemToRemove.currentPrice);
        state.totalQuantity = Math.max(
          0,
          state.totalQuantity - itemToRemove.quantity
        );
        state.totalPrice = Math.max(
          0,
          state.totalPrice - numericPrice * itemToRemove.quantity
        );

        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
        clampCartValues(state);
        saveCartToLocalStorage(state);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        const numericPrice = getNumericPrice(item.currentPrice);
        item.quantity += 1;
        state.totalPrice += numericPrice;
        state.totalQuantity += 1;
      }
      clampCartValues(state);
      saveCartToLocalStorage(state);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        const numericPrice = getNumericPrice(item.currentPrice);
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalPrice = Math.max(0, state.totalPrice - numericPrice);
          state.totalQuantity = Math.max(0, state.totalQuantity - 1);
        } else {
          state.cartItem = state.cartItem.filter(
            (item) => item.id !== action.payload
          );
          state.totalQuantity = Math.max(0, state.totalQuantity - 1);
          state.totalPrice = Math.max(0, state.totalPrice - numericPrice);
        }
      }
      clampCartValues(state);
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
