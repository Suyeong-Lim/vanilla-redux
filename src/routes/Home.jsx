import React, { useState } from "react";
import { connect } from "react-redux";
import { add, remove } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    console.log(text);
    setText("");
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo, id) => (
          <ToDo key={id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

//📍 아래와 같이 그냥 function을 만들어서 connect를 사용하면 된다.
function mapStateToProps(state) {
  return { toDos: state };
}

//⭐️ - ❓
function mapDispatchToProps(dispatch) {
  return { addTodo: (text) => dispatch(actionCreators.addTodo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
