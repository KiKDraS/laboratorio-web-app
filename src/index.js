import "../scss/main.scss";
import "./components/listeners";

import { renderCart } from "./components/renders/renderCart";
import { renderProducts } from "./components/renders/renderProducts";
import { API_ENDPOINT } from "./constants/API_ENDPOINT";
import { loadCartFromStorage } from "./features/cart/cartSlice";
import { getProducts } from "./features/products/productsSlice";

import { store } from "./store";

const start = () => {
  renderCart();
  renderProducts();
};

//Actualizar vista con store
store.subscribe(start);

//Iniciar App
document.addEventListener("DOMContentLoaded", () => {
  store.dispatch(getProducts(API_ENDPOINT));
  store.dispatch(loadCartFromStorage());
  start();
});
