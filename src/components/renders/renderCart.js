import { store } from "../../store";
import { cartProduct } from "../cartProduct";
import { emptyCart } from "../emptyCart";
import { renderNavbarCartTotal } from "../renderNavbarCartTotal";
import { renderCartButtons } from "./renderCartButtons";

export const renderCart = () => {
  const { cartItems: cart, total } = store.getState().cart;
  const cartContainer = document.getElementById("cartContainer");
  const isEmpty = cart.length === 0;

  renderNavbarCartTotal();

  cartContainer.innerHTML = isEmpty
    ? emptyCart()
    : cart.map(cartProduct).join("");
  showTotal(total);
  renderCartButtons(!isEmpty);
};

const showTotal = (total) => {
  const totalContainer = document.getElementById("totalContainer");
  const totalElement = totalContainer.children[1];
  const shouldShow = total !== 0;

  totalElement.textContent = `$${total}`;
  totalContainer.classList.toggle("d-none", !shouldShow);
  totalContainer.classList.toggle("d-flex", shouldShow);
};
