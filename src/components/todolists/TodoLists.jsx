import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, statusTodo } from "../../redux/actions";
import { TodoSelectors } from "../../redux/selectors/TodoSelectors";
import TodoItems from "../todoitems/TodoItems";
import "./TodoLists.css";

const TodoLists = () => {
  const todos = useSelector(TodoSelectors);
  const dispatch = useDispatch();

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
