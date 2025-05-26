export const cartProduct = ({ id, title, img, price, quantity }) => {
  return `
    <article id=${id} class="d-flex align-items-center mb-5" aria-labelledby=${title}>
        <figure class="flex-shrink-0 w-25 m-0">
            <img src=${img} class="img-fluid" alt=${title} loading="lazy" />
        </figure>
        <div class="flex-grow-1 ms-1">
            <h3 id=${title} class="text-primary h5">${title}</h3>
            <p class="price fw-bold">$${price}</p>

            <fieldset class="d-flex align-items-center" aria-label="Cantidad del producto"
                style="border:0; padding:0; margin:0;">
                <span class="fw-bold me-2 pe-3">$${price * quantity}</span>
                <div class="def-number-input number-input">
                    <button data-action="cart-remove-one" data-id="${id}" class="minus" aria-label="Reducir cantidad"></button>
                    <input class="quantity fw-bold bg-body-tertiary text-body" min="0" name="quantity" value="${quantity}" type="number" aria-label="Cantidad">
                    <button data-action="cart-add-one" data-id="${id}" class="plus" aria-label="Aumentar cantidad"></button>
                </div>
                <button data-action="cart-remove-product" data-id="${id}" type="button" class="btn btn-outline text-danger ms-2" aria-label="Eliminar producto">
                    <i class="bi bi-trash-fill" aria-hidden="true"></i>
                </button>
            </fieldset>
        </div>
    </article>
    `;
};

export const cartAddOne = (id) => alert(`Sumar uno al producto - cart ${id}`);
export const cartRemoveOne = (id) =>
  alert(`Restar uno al producto - cart ${id}`);
export const cartRemoveProduct = (id) =>
  alert(`Eliminar producto del carrito - cart ${id}`);
