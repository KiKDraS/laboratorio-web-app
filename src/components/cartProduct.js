import {
  calculateCartTotals,
  decreaseCartItem,
  increaseCartItem,
  removeCartItem,
} from "../features/cart/cartSlice";
import { store } from "../store";
import { CART_ACTIONS } from "./actions/CART_ACTIONS";

export const cartProduct = ({ id, title, image, price, quantity }) => {
  return `
    <article id=${id} class="d-flex align-items-center mb-5 ps-2 pe-2" aria-labelledby=${title}>
        <figure class="flex-shrink-0 w-25 m-0 p-3">
            <image src=${image} class="image-fluid w-100" alt=${title} loading="lazy" >
        </figure>
        <div class="flex-grow-1 ms-1">
          <h3 id=${title} class="text-primary text-pretty h5">${title}</h3>
          <p class="price fw-bold">$${price}</p>

          <fieldset class="d-flex align-items-center" aria-label="Cantidad del producto"
              style="border:0; padding:0; margin:0;">
              <span class="fw-bold me-2 pe-3">$${(price * quantity).toFixed(
                2
              )}</span>
              <div class="def-number-input number-input d-flex align-items-center justify-content-center">
                  <button data-action=${
                    CART_ACTIONS.REMOVE_ONE
                  } data-id="${id}" class="minus" aria-label="Reducir cantidad"></button>
                  <input class="quantity fw-bold bg-body-tertiary text-body" min="0" name="quantity" value="${quantity}" type="number" aria-label="Cantidad">
                  <button data-action=${
                    CART_ACTIONS.ADD_ONE
                  } data-id="${id}" class="plus" aria-label="Aumentar cantidad"></button>
              </div>
              <button data-action=${
                CART_ACTIONS.REMOVE_PRODUCT
              } data-id="${id}" type="button" class="btn btn-outline text-danger ms-2" aria-label="Eliminar producto">
                  <i class="bi bi-trash-fill" aria-hidden="true"></i>
              </button>
          </fieldset>
        </div>
    </article>
    `;
};

export const cartAddOne = (id) => {
  store.dispatch(increaseCartItem(Number(id)));
  store.dispatch(calculateCartTotals());
};

export const cartRemoveOne = (id) => {
  store.dispatch(decreaseCartItem(Number(id)));
  store.dispatch(calculateCartTotals());
};

export const cartRemoveProduct = (id) => {
  store.dispatch(removeCartItem(Number(id)));
  store.dispatch(calculateCartTotals());
};
