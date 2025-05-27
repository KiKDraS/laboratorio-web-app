import { STORAGE_NAME } from "../constants/STORAGE_NAME";

export const updateCartItemOnStorage = (item) => {
  const storage = localStorage.getItem(STORAGE_NAME.CART);
  let items = storage ? JSON.parse(storage) : [];

  const itemIndex = items.findIndex((i) => i.id === item.id);
  if (index === -1) return;

  items[itemIndex] = item;
  localStorage.setItem(STORAGE_NAME.CART, JSON.stringify(items));
};
