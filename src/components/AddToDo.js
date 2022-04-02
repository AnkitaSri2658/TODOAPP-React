import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import * as todoActions from "./store/todoActions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todoInputRef = useRef();
  const addTodoHandler = (event) => {
    event.preventDefault();
    let enteredtodo = todoInputRef.current.value;
    dispatch(todoActions.add(enteredtodo));
    todoInputRef.current.value = "";
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input type="text" ref={todoInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
