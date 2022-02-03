import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  // return { deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id)) };
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
