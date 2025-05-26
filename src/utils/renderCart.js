import { cartProduct } from "../components/cartProduct";

export const renderCart = () => {
  const cart = [
    {
      id: "product-id",
      title: "Samsung Galaxy M11 64GB",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp",
      price: 799,
      quantity: 1,
    },
    {
      id: "product-id-1",
      title: "Samsung Galaxy",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp",
      price: 99,
      quantity: 2,
    },
  ];

  document.getElementById("cartContainer").innerHTML = cart
    .map((el) => cartProduct(el))
    .join("");
};
