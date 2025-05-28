import { updateCartOnStorage } from "./updateCartItemOnStorage";

export const resetCart = (state) => {
  state.cartItems = [];
  state.amount = 0;
  state.total = 0;
  updateCartOnStorage([]);
};
