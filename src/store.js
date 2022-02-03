import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

//⭐️ Action Creator => object return ? action return ?
//action = 객체. 
export const addTodo = () => {
  return {
    type: ADD,
    text,
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id != action.id);
    default:
      return state;
  }
};

const store = createStore();

export default store;
