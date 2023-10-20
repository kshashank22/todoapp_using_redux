import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, statusTodo, getLocalStorage } from "../../redux/actions";
import { TodoSelectors } from "../../redux/selectors/TodoSelectors";
import TodoItems from "../todoitems/TodoItems";
import "./TodoLists.css";

const TodoLists = () => {
  const todos = useSelector(TodoSelectors);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem("todoKey"));
    dispatch(getLocalStorage(storageTodo));
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todoKey", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <ul className="todoListContainer">
      {todos.map((eachTodo) => (
        <TodoItems
          key={eachTodo.id}
          todo={eachTodo}
          delet={() => dispatch(deleteTodo(eachTodo.id))}
          check={() => dispatch(statusTodo(eachTodo.id))}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
