import { store } from "../../store";
import { productItem } from "../productItem";

export const renderProducts = () => {
  const products = store.getState().products.productsToShow;
  console.log(products);

  if (products.length === 0) {
    document.getElementById("productsContainer").innerHTML =
      "<p>No products found</p>";
    return;
  }

  document.getElementById("productsContainer").innerHTML = products
    .map((el) => productItem(el))
    .join("");
};
