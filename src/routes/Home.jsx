import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, actionCreators } from "../store";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    console.log(text);
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

//📍 아래와 같이 그냥 function을 만들어서 connect를 사용하면 된다.
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

//⭐️ - ❓ 
function mapDispatchToProps(dispatch) {
  return { addTodo: (text) => dispatch(actionCreators.addTodo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
