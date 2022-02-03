import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const Minus = "Minus";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case Minus:
      return count - 1;
    default:
      return count;
  }
};
const onChange = () => {
  number.innerText = countStore.getState();
};

const countStore = createStore(countModifier);

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: Minus });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
// number.innerText = ;
console.log(countStore);
