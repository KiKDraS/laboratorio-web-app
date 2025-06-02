import { store } from "../../store";
import { emptySearch } from "../emptySearch";
import { loader } from "../loader";
import { productItem } from "../productItem";
import { productsError } from "../productsError";

export const renderProducts = () => {
  const {
    productsToShow: products,
    error,
    isLoading,
  } = store.getState().products;
  const productsContainer = document.getElementById("productsContainer");

  if (isLoading) {
    productsContainer.innerHTML = loader();
    return;
  }

  if (error) {
    productsContainer.innerHTML = productsError();
    return;
  }

  if (products.length === 0) {
    productsContainer.innerHTML = emptySearch();
    return;
  }

  productsContainer.innerHTML = products.map((el) => productItem(el)).join("");
};
