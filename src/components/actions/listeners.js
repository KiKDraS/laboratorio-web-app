import { CART_ACTIONS } from "./CART_ACTIONS";
import { PAYMENT_ACTIONS } from "./PAYMENT_ACTIONS";
import { PRODUCT_ACTIONS } from "./PRODUCT_ACTIONS";
import { clearCartItems, clearPayment } from "../cartButtons";
import { cartAddOne, cartRemoveOne, cartRemoveProduct } from "../cartProduct";
import {
  clearSelection,
  productAddToCart,
  selectProduct,
} from "../productItem";
import { setProductsToShow } from "../../features/products/productsSlice";
import { store } from "../../store";

const ACTION_HANDLERS = {
  [CART_ACTIONS.REMOVE_ONE]: cartRemoveOne,
  [CART_ACTIONS.ADD_ONE]: cartAddOne,
  [CART_ACTIONS.REMOVE_PRODUCT]: cartRemoveProduct,
  [PRODUCT_ACTIONS.SELECT_PRODUCT]: selectProduct,
  [PRODUCT_ACTIONS.ADD_TO_CART]: productAddToCart,
  [PRODUCT_ACTIONS.CLEAR_SELECTED_PRODUCT]: clearSelection,
  [PAYMENT_ACTIONS.CLEAR_PAYMENT]: clearPayment,
  [CART_ACTIONS.CLEAR_CART]: clearCartItems,
};

document.addEventListener("click", ({ target }) => {
  const actionElement = target.closest("[data-action]");
  if (!actionElement) return;

  const { action, id: productId } = actionElement.dataset;
  const handler = ACTION_HANDLERS[action];

  if (handler) {
    handler(productId || undefined);
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
});

document.addEventListener("input", ({ target: { value } }) => {
  store.dispatch(setProductsToShow(value));
});
