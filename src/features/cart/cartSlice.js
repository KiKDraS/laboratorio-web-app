import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_NAME } from "../../constants/STORAGE_NAME";
import { updateCartOnStorage } from "../../utils/updateCartItemOnStorage";
import { resetCart } from "../../utils/resetCart";

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

      state.amount = storage.reduce((acc, item) => acc + item.quantity, 0) || 0;
      state.total =
        storage.reduce((acc, item) => acc + item.quantity * item.price, 0) || 0;

      state.cartItems = storage;
    },
    addCartItem: (state, { payload: newProduct }) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === newProduct.id
      );

      const newCart =
        existingProductIndex !== -1
          ? state.cartItems.map((item) =>
              item.id === newProduct.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [newProduct, ...state.cartItems];

      localStorage.setItem(STORAGE_NAME.CART, JSON.stringify(newCart));
      state.cartItems = newCart;
    },
    clearCart: (state) => {
      resetCart(state);
      localStorage.removeItem(STORAGE_NAME.CART);
    },
    removeCartItem: (state, { payload: itemId }) => {
      const newCart = state.cartItems.filter((item) => item.id !== itemId);

      if (newCart.length === 0) {
        resetCart(state);
        return;
      }

      updateCartOnStorage(newCart);
      state.cartItems = newCart;
    },
    increaseCartItem: (state, { payload: productToModifyId }) => {
      const newCart = state.cartItems.map((item) =>
        item.id === productToModifyId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updateCartOnStorage(newCart);
      state.cartItems = newCart;
    },
    decreaseCartItem: (state, { payload: productToModifyId }) => {
      const newCart = state.cartItems.map((item) => {
        if (item.quantity === 1 && item.id === productToModifyId) {
          return;
        }

        return item.id === productToModifyId
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });

      if (!newCart[0]) {
        resetCart(state);
        return;
      }

      updateCartOnStorage(newCart);
      state.cartItems = newCart;
    },
    calculateCartTotals: (state) => {
      state.amount = state.cartItems
        .reduce((acc, item) => acc + item.quantity, 0)
        .toFixed(2);
      state.total = state.cartItems
        .reduce((acc, item) => acc + item.quantity * item.price, 0)
        .toFixed(2);
    },
  },
});

export const {
  loadCartFromStorage,
  addCartItem,
  clearCart,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
  calculateCartTotals,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
