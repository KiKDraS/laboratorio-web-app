import "../scss/main.scss";
import "./utils/listeners";

import { renderNavbarCartTotal } from "./components/renderNavbarCartTotal";
import { renderCart } from "./utils/renderCart";
import { renderProducts } from "./utils/renderProducts";

import { store } from "./store";

const start = () => {
  renderNavbarCartTotal();
  renderCart();
  renderProducts();
};

//Actualizar vista con store
store.subscribe(start);

//Iniciar App
document.addEventListener("DOMContentLoaded", start);
