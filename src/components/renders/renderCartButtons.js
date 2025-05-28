import { cartButtons } from "../cartButtons";

export const renderCartButtons = (show = false) => {
  const container = document.getElementById("cartButtons");

  container.innerHTML = cartButtons();

  if (show) {
    container.classList.remove("d-none");
    container.classList.add("d-flex");
  } else {
    container.classList.remove("d-flex");
    container.classList.add("d-none");
  }
};
