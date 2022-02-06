import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

//📍
// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// 📍 create Reducer function
// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteTodo]: (state, action) => {
//     return state.filter((todo) => todo.id != action.payload);
//   },
// });

// 📍 createSlice = reducer 뿐만 아니라 actions 도 생성해준다.
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id != action.payload),
  },
});

// 📍 Redux DevTools 사용가능
const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.actions);

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: action.id }, ...state];
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id != action.payload);
//     default:
//       return state;
//   }
// };

export const { add, remove } = toDos.actions;

export default store;
