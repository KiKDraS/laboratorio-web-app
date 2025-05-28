import { PRODUCT_ACTIONS } from "./actions/PRODUCT_ACTIONS";
import { addCartItem, calculateCartTotals } from "../features/cart/cartSlice";
import {
  addOneToSelectedProduct,
  clearSelectProduct,
  removeOneFromSelectedProduct,
  setSelectProduct,
} from "../features/products/productsSlice";
import { store } from "../store";

export const productItem = ({ id, title, img, price, description }) => {
  return `
        <div class="col-lg-4 col-md-6 mb-4">
            <article data-action=${
              PRODUCT_ACTIONS.SELECT_PRODUCT
            } data-id="${id}" class="card hover-clickable" data-bs-toggle="modal" data-bs-target="#${id}-modal" aria-labelledby="${title}">
                <figure class="bg-image hover-zoom m-0">
                    <img src="${img}" class="w-100" alt="${title}" />
                    <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </div>
                </figure>
                <div class="card-body">
                    <h3 class="card-title h4 mb-3" id="${title}">${title}</h3>
                    <p class="mb-3 price fw-bold">$${price.toFixed(2)}</p>
                </div>
            </article>
        </div>

        <!-- Modal de producto -->
        <div class="modal fade" id="${id}-modal" tabindex="-1" aria-labelledby="${id}-modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <header class="modal-header">
                        <h2 id="${id}-modalLabel" class="modal-title h5">${title}</h2>
                        <button data-action=${
                          PRODUCT_ACTIONS.CLEAR_SELECTED_PRODUCT
                        } type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar modal"></button>
                    </header>

                    <section class="modal-body" aria-labelledby="${id}-modalLabel">
                        <figure class="text-center">
                            <img src="${img}" class="img-fluid mb-3" alt="Vista detallada del producto" loading="lazy" />
                            <figcaption class="visually-hidden">Imagen ampliada del producto</figcaption>
                        </figure>
                        <p>${description}</p>
                    </section>

                    <footer class="modal-footer">
                        <form class="row g-3">
                            <div class="col-12 col-md-6">
                                <fieldset class="d-flex align-items-center" aria-label="Cantidad"
                                    style="border:0; padding:0; margin:0;">

                                    <button data-action=${
                                      PRODUCT_ACTIONS.REMOVE_ONE_FROM_SELECTED_PRODUCT
                                    } type="button" class="btn btn-outline-primary me-2" aria-label="Reducir cantidad">
                                        <i class="bi bi-dash-lg" aria-hidden="true"></i>
                                    </button>

                                    <div class="form-outline">
                                        <label for="modalQuantity" class="visually-hidden">Cantidad</label>
                                        <input  id="${id}-modalQuantity" min="1" name="quantity" value="${
    store.getState().products.selectProduct?.quantity || 1
  }" type="number" class="form-control" />
                                    </div>

                                    <button data-action=${
                                      PRODUCT_ACTIONS.ADD_ONE_TO_SELECTED_PRODUCT
                                    } type="button" class="btn btn-outline-primary ms-2" aria-label="Aumentar cantidad">
                                        <i class="bi bi-plus-lg" aria-hidden="true"></i>
                                    </button>
                                </fieldset>
                            </div>
                            <div class="col-12 col-md-6 d-flex justify-content-end gap-2">
                                <button data-action=${
                                  PRODUCT_ACTIONS.ADD_TO_CART
                                } data-id="${id}" type="submit" class="btn btn-success" data-bs-dismiss="modal">Añadir al carrito</button>
                                <button data-action=${
                                  PRODUCT_ACTIONS.CLEAR_SELECTED_PRODUCT
                                } type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    `;
};

export const selectProduct = (id) => store.dispatch(setSelectProduct(id));

export const productAddOne = () => store.dispatch(addOneToSelectedProduct());

export const productRemoveOne = () =>
  store.dispatch(removeOneFromSelectedProduct());

export const productAddToCart = () => {
  const { selectProduct } = store.getState().products;
  if (!selectProduct) return;

  store.dispatch(addCartItem(selectProduct));
  store.dispatch(calculateCartTotals());
  store.dispatch(clearSelectProduct());
};

export const clearSelection = () => store.dispatch(clearSelectProduct());
