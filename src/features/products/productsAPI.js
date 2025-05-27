const products = [
  {
    id: "product-id",
    title: "Samsung Galaxy M11 64GB",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 799,
    quantity: 1,
  },
  {
    id: "product-id-1",
    title: "Samsung Galaxy",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 99,
    quantity: 1,
  },
];

export const fetchProducts = async (endpoint) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve(products);
    }, 2500);
  });
};
