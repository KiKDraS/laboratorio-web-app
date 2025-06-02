import { cartButtons } from "../cartButtons";

export const renderCartButtons = (show = false) => {
  const container = document.getElementById("cartButtons");

  container.innerHTML = cartButtons();
  container.classList.toggle("d-none", !show);
  container.classList.toggle("d-flex", show);
};
