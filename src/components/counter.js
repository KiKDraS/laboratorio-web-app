import { store } from "../store";
import {
  decrement,
  increment,
  incrementAsync,
} from "../features/counter/counterSlice";

export const Counter = () => {
  return `
        <div>
            <p>
                Clicked: <span id="value">${
                  store.getState().counter.value
                }</span> times
                <button id="increment" class="btn btn-primary">+</button>
                <button id="incrementAsync">+</button>
                <button id="decrement">-</button>
            </p>
        </div>
    `;
};

export const incrementCounter = () => store.dispatch(increment());
export const incrementCounterAsync = () => store.dispatch(incrementAsync(1));
export const decrementCounter = () => store.dispatch(decrement(1));
