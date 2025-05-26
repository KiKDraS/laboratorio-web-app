export const productItem = ({
  id,
  title,
  img,
  price,
  description,
  quantity,
}) => {
  return `
        <div class="col-lg-4 col-md-6 mb-4">
            <article class="card hover-clickable" data-bs-toggle="modal" data-bs-target="#${id}-modal" aria-labelledby="${title}">
                <figure class="bg-image hover-zoom m-0">
                    <img src="${img}" class="w-100" alt="${title}" />
                    <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </div>
                </figure>
                <div class="card-body">
                    <h3 class="card-title h4 mb-3" id="${title}">${title}</h3>
                    <p class="mb-3 price fw-bold">$${price}</p>
                </div>
            </article>
        </div>

        <!-- Modal de producto -->
        <div class="modal fade" id="${id}-modal" tabindex="-1" aria-labelledby="${id}-modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <header class="modal-header">
                        <h2 id="${id}-modalLabel" class="modal-title h5">${title}</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar modal"></button>
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

                                    <button data-action="product-remove-one" data-id="${id}" type="button" class="btn btn-outline-primary me-2" aria-label="Reducir cantidad">
                                        <i class="bi bi-dash-lg" aria-hidden="true"></i>
                                    </button>

                                    <div class="form-outline">
                                        <label for="modalQuantity" class="visually-hidden">Cantidad</label>
                                        <input id="modalQuantity" min="1" name="quantity" value="${quantity}" type="number" class="form-control" />
                                    </div>

                                    <button data-action="product-add-one" data-id="${id}" type="button" class="btn btn-outline-primary ms-2" aria-label="Aumentar cantidad">
                                        <i class="bi bi-plus-lg" aria-hidden="true"></i>
                                    </button>
                                </fieldset>
                            </div>
                            <div class="col-12 col-md-6 d-flex justify-content-end gap-2">
                                <button data-action="product-add-to-cart" data-id="${id}" type="submit" class="btn btn-success">Añadir al carrito</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </form>
                    </footer>
                </div>
            </div>
        </div>
    `;
};

export const productAddOne = (id) =>
  alert(`Sumar uno al producto - product ${id}`);
export const productRemoveOne = (id) =>
  alert(`Restar uno al producto - product ${id}`);
export const productAddToCart = (id) =>
  alert(`Añadir producto al carrito - product ${id}`);
