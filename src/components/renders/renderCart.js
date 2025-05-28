import { store } from "../../store";
import { cartProduct } from "../cartProduct";
import { renderNavbarCartTotal } from "../renderNavbarCartTotal";
import { renderCartButtons } from "./renderCartButtons";

export const renderCart = () => {
  const cart = store.getState().cart.cartItems;
  const total = store.getState().cart.total;

  renderNavbarCartTotal();

  if (cart.length === 0) {
    document.getElementById("cartContainer").innerHTML =
      "<p>Your cart is empty</p>";
    showTotal(0);
    renderCartButtons(false);
    return;
  }

  document.getElementById("cartContainer").innerHTML = cart
    .map((el) => cartProduct(el))
    .join("");
  showTotal(total);
  renderCartButtons(true);
};

const showTotal = (total) => {
  const totalContainer = document.getElementById("totalContainer");
  totalContainer.children[1].textContent = `$${total.toFixed(2)}`;

  if (total === 0) {
    totalContainer.classList.add("d-none");
    totalContainer.classList.remove("d-flex");
  } else {
    totalContainer.classList.remove("d-none");
    totalContainer.classList.add("d-flex");
  }
};
