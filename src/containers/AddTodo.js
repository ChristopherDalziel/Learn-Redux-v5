// For the AddTodo component both the presentation and the logic are mixed into one single definition

import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          // Refs provide a way to access DOM nodes or React elements created in the render method (Refs should NOT be overused)
          ref={node => {
            input = node;
          }}
        />{" "}
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
