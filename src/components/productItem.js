import { PRODUCT_ACTIONS } from "./actions/PRODUCT_ACTIONS";
import { addCartItem, calculateCartTotals } from "../features/cart/cartSlice";
import {
  clearSelectProduct,
  setSelectProduct,
} from "../features/products/productsSlice";
import { store } from "../store";
import { alertMsg } from "./alertMsg";

export const productItem = ({ id, title, image, price, description }) => {
  return `
        <div class="col-lg-3 col-md-4 mb-4">
            <article data-action=${PRODUCT_ACTIONS.SELECT_PRODUCT} data-id="${id}" class="card hover-clickable h-100" data-bs-toggle="modal" data-bs-target="#${id}-modal" aria-labelledby="${title}">
                <figure class="bg-image hover-zoom m-0 p-4 h-100">
                    <image src="${image}" class="w-100" alt="${title}" />
                    <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </div>
                </figure>
                <div class="card-body">
                    <h3 class="card-title h4 mb-3" id="${title}">${title}</h3>
                    <span class="mb-3 price fw-bold">$${price}</span>
                </div>
            </article>
        </div>

        <!-- Modal de producto -->
        <div class="modal fade" id="${id}-modal" tabindex="-1" aria-labelledby="${id}-modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <header class="modal-header">
                        <h2 id="${id}-modalLabel" class="modal-title h5">${title}</h2>
                        <button data-action=${PRODUCT_ACTIONS.CLEAR_SELECTED_PRODUCT} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar modal"></button>
                    </header>

                    <section class="modal-body" aria-labelledby="${id}-modalLabel">
                        <figure class="text-center p-4">
                            <image src="${image}" class="image-fluid mb-3 w-100" alt="Vista detallada del producto" loading="lazy" />
                            <figcaption class="visually-hidden">Imagen ampliada del producto</figcaption>
                        </figure>
                        <p>${description}</p>
                    </section>

                    <footer class="w-100 m-auto modal-footer row g-3">
                        <div class="col-12 d-flex justify-content-between gap-2">
                            <span class="ps-2 price fw-bold fs-4 text-dark">$${price}</span>
                            <button data-action=${PRODUCT_ACTIONS.ADD_TO_CART} data-id="${id}" type="button" class="btn btn-success" data-bs-dismiss="modal">Añadir al carrito</button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    `;
};

export const selectProduct = (id) =>
  store.dispatch(setSelectProduct(Number(id)));

export const productAddToCart = () => {
  const { selectProduct } = store.getState().products;
  if (!selectProduct) return;

  store.dispatch(addCartItem(selectProduct));
  store.dispatch(calculateCartTotals());
  store.dispatch(clearSelectProduct());
  alertMsg("Producto agregado al carrito");
};

export const clearSelection = () => store.dispatch(clearSelectProduct());
