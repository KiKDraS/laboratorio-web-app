export const updateProductQuantity = (elementId, quantity) => {
  console.log(
    `Updating quantity for element with ID: ${elementId} to ${quantity}`
  );

  const inputElement = document.getElementById(elementId);
  if (inputElement) {
    inputElement.value = quantity;
    console.log(inputElement.value);
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
};
