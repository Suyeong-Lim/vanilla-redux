import React from "react";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  //구조분해 할당으로 꺼내줘야함 
  // const { id } = useParams();
  const params = useParams();
  const id = params.id;
  const todo = toDos.find((todo) => todo.id === id);
  return <h1>{todo.text}</h1>;
};

function mapStateToProps(state, ownProps) {
  return {
    toDos: state,
  };
}
export default connect(mapStateToProps)(Detail);
