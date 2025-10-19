import "../scss/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./components/actions/listeners";

import { renderCart } from "./components/renders/renderCart";
import { renderProducts } from "./components/renders/renderProducts";
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
  store.dispatch(getProducts());
  store.dispatch(loadCartFromStorage());
  start();
});
