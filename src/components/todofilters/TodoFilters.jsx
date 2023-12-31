import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTodo } from "../../redux/actions";
import { filtersLists } from "../../redux/selectors/TodoSelectors";
import "./TodoFilters.css";
const TodoFilters = () => {
  const filter = useSelector(filtersLists);
  const dispatch = useDispatch();
  return (
    <div className="todoFilterContainer">
      <label>
        <input
          type="radio"
          value="All"
          name="todo"
          className="todoFilterInput"
          onChange={(event) => dispatch(filterTodo(event.target.value))}
          checked={filter === "All" || filter === undefined ? true : false}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="Completed"
          name="todo"
          className="todoFilterInput"
          onChange={(event) => dispatch(filterTodo(event.target.value))}
          checked={filter === "Completed"}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          value="InCompleted"
          name="todo"
          className="todoFilterInput"
          onChange={(event) => dispatch(filterTodo(event.target.value))}
          checked={filter === "InCompleted"}
        />
        InCompleted
      </label>
    </div>
  );
};

export default TodoFilters;
