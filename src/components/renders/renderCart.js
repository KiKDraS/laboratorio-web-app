import { store } from "../../store";
import { cartProduct } from "../cartProduct";

export const renderCart = () => {
  const cart = store.getState().cart.cartItems;
  const total = store.getState().cart.total;

  if (cart.length === 0) {
    document.getElementById("cartContainer").innerHTML =
      "<p>Your cart is empty</p>";
    return;
  }

  document.getElementById("cartContainer").innerHTML = (cart) =>
    cart.map((el) => cartProduct(el)).join("");
  showTotal(total);
};

const showTotal = (total) => {
  const totalContainer = document.getElementById("totalContainer");
  totalContainer.classList.remove("d-none");
  totalContainer.classList.add("d-flex");
  totalContainer.children[1].textContent = `$${total.toFixed(2)}`;
};
