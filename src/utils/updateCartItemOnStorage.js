import { STORAGE_NAME } from "../constants/STORAGE_NAME";

export const updateCartOnStorage = (items) => {
  localStorage.setItem(STORAGE_NAME.CART, JSON.stringify(items));
};
