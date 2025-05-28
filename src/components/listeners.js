import { CART_ACTIONS } from "./actions/CART_ACTIONS";
import { PAYMENT_ACTIONS } from "./actions/PAYMENT_ACTIONS";
import { PRODUCT_ACTIONS } from "./actions/PRODUCT_ACTIONS";
import { clearCartItems, clearPayment } from "./cartButtons";
import { cartAddOne, cartRemoveOne, cartRemoveProduct } from "./cartProduct";
import {
  clearSelection,
  productAddOne,
  productAddToCart,
  productRemoveOne,
  selectProduct,
} from "./productItem";

document.addEventListener("click", ({ target }) => {
  const actionElement = target.closest("[data-action]");
  if (!actionElement) return;

  const action = actionElement.dataset.action;
  const productId = actionElement.dataset.id;

  switch (action) {
    case CART_ACTIONS.REMOVE_ONE:
      cartRemoveOne(productId);
      break;

    case CART_ACTIONS.ADD_ONE:
      cartAddOne(productId);
      break;

    case CART_ACTIONS.REMOVE_PRODUCT:
      cartRemoveProduct(productId);
      break;

    case PRODUCT_ACTIONS.SELECT_PRODUCT:
      selectProduct(productId);
      break;

    case PRODUCT_ACTIONS.ADD_ONE_TO_SELECTED_PRODUCT:
      productAddOne(productId);
      break;

    case PRODUCT_ACTIONS.REMOVE_ONE_FROM_SELECTED_PRODUCT:
      productRemoveOne(productId);
      break;

    case PRODUCT_ACTIONS.ADD_TO_CART:
      productAddToCart(productId);
      break;

    case PRODUCT_ACTIONS.CLEAR_SELECTED_PRODUCT:
      clearSelection();
      break;

    case PAYMENT_ACTIONS.CLEAR_PAYMENT:
      clearPayment();
      break;

    case CART_ACTIONS.CLEAR_CART:
      clearCartItems();
      break;
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
});
