import "../scss/main.scss";

import {
  Counter,
  decrementCounter,
  incrementCounter,
  incrementCounterAsync,
} from "./components/counter";
import { store } from "./store";

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

//Render
const renderHeader = () => {
  header.innerHTML = `Soy el header`;
};

const renderMain = () => {
  main.innerHTML = Counter();
};

const renderFooter = () => {
  footer.innerHTML = `Soy el footer`;
};

//Actualizar vista con store
store.subscribe(renderMain);

//Agregar listeners
main.addEventListener("click", ({ target: { id } }) => {
  switch (id) {
    case "increment":
      incrementCounter();
      break;
    case "incrementAsync":
      incrementCounterAsync();
      break;

    case "decrement":
      decrementCounter();
      break;
  }
});

//Iniciar App
renderHeader();
renderMain();
renderFooter();
