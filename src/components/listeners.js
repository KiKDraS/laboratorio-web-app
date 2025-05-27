import { cartAddOne, cartRemoveOne, cartRemoveProduct } from "./cartProduct";
import {
  productAddOne,
  productAddToCart,
  productRemoveOne,
} from "./productItem";

document.addEventListener("click", ({ target }) => {
  const actionElement = target.closest("[data-action]");
  if (!actionElement) return;

  const action = actionElement.dataset.action;
  const productId = actionElement.dataset.id;

  switch (action) {
    case "cart-remove-one":
      cartRemoveOne(productId);
      break;

    case "cart-add-one":
      cartAddOne(productId);
      break;

    case "cart-remove-product":
      cartRemoveProduct(productId);
      break;

    case "product-remove-one":
      productRemoveOne(productId);
      break;

    case "product-add-one":
      productAddOne(productId);
      break;

    case "product-add-to-cart":
      productAddToCart(productId);
      break;

    case "finish":
      alert("Finalizar compra");
      break;

    case "clear-cart":
      alert("Vaciar carrito");
      break;
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
});
