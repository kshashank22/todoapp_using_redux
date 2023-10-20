import React, { useState } from "react";

import TodoButton from "../todobutton/TodoButton";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import "./TodoForm.css";
import TodoFilters from "../todofilters/TodoFilters";
import { todoLists } from "../../redux/selectors/TodoSelectors";

function TodoForm() {
  const todos = useSelector(todoLists);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const saveTodo = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  return (
    <form onSubmit={saveTodo} className="formContainer">
      <input
        className="inputStyle"
        type="text"
        placeholder="Your Todo"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <div className="buttonContainer">
        <TodoButton
          type={"submit"}
          onclick={saveTodo}
          value={"Add"}
          classname={"addButton"}
        />
      </div>
      {todos.length > 0 && <TodoFilters />}
    </form>
  );
}

export default TodoForm;
