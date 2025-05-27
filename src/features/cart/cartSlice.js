import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_NAME } from "../../constants/STORAGE_NAME";
import { updateCartItemOnStorage } from "../../utils/updateCartItemOnStorage";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromStorage: (state) => {
      const storage = JSON.parse(
        localStorage.getItem(STORAGE_NAME.CART) || "[]"
      );

      if (storage.length > 0) {
        state.amount = storage.reduce((acc, item) => acc + item.amount, 0);
        state.total = storage.reduce(
          (acc, item) => acc + item.amount * item.price,
          0
        );
      }
      state.cartItems = storage;
    },
    setCartItem: (state, action) => {
      const newCart = [action.payload, ...state.cartItems];
      localStorage.setItem(STORAGE_NAME.CART, JSON.stringify(newCart));
      state.cartItems = newCart;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeCartItem: (state, { payload: itemId }) => {
      const newCart = state.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem(STORAGE_NAME.CART, JSON.stringify(newCart));
      state.cartItems = newCart;
    },
    increaseCartItem: (state, { payload: productToModifyId }) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === productToModifyId
      );
      const newCartItem = { ...cartItem, amount: cartItem.amount + 1 };
      updateCartItemOnStorage(newCartItem);
      cartItem.amount = newCartItem;
    },
    decreaseCartItem: (state, { payload: productToModifyId }) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === productToModifyId
      );
      const newCartItem = { ...cartItem, amount: cartItem.amount - 1 };
      updateCartItemOnStorage(newCartItem);
      cartItem.amount = newCartItem;
    },
    calculateCartTotals: (state) => {
      state.amount = state.cartItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );
      state.total = state.cartItems.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
    },
  },
});

export const {
  loadCartFromStorage,
  setCartItems,
  clearCart,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
  calculateCartTotals,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
