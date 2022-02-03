import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

//⭐️ Action Creator => object return ===  action return / action 객체를 찍어내줌
//action = 객체.
const addTodo = (text) => {
  return {
    type: ADD,
    text,
    id: crypto.randomUUID(),
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id != action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
