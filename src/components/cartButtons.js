import { clearCart } from "../features/cart/cartSlice";
import { store } from "../store";
import { CART_ACTIONS } from "./actions/CART_ACTIONS";
import { PAYMENT_ACTIONS } from "./actions/PAYMENT_ACTIONS";

export const cartButtons = () => {
  return `
    <button data-action=${PAYMENT_ACTIONS.CLEAR_PAYMENT}
        class="btn btn-success d-flex justify-content-center align-items-center gap-2"
        aria-label="Finalizar compra">
        <span>Finalizar compra</span>
        <i class="bi bi-cart-check" aria-hidden="true"></i>
    </button>
    <button data-action=${CART_ACTIONS.CLEAR_CART} class="btn btn-danger text-white" aria-label="Vaciar carrito">
        <span>Vaciar</span>
        <i class="bi bi-cart" aria-hidden="true"></i>
    </button>
  `;
};

export const clearCartItems = () => {
  store.dispatch(clearCart());
};

export const clearPayment = () => {
  store.dispatch(clearCart());
  alert("Compra finalizada con éxito. ¡Gracias por tu compra!");
};
