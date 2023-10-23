export const todoLists = (state) => state.todoList;
export const filtersLists = (state) => state.filterTodoStatus;

export const TodoSelectors = (state) => {
  const todos = todoLists(state);
  const filter = filtersLists(state);

  if (filter === "All") {
    return todos;
  } else if (filter === "Completed") {
    return todos.filter((eachTodo) => eachTodo.status);
  } else if (filter === "InCompleted") {
    return todos.filter((eachTodo) => !eachTodo.status);
  }
  return todos;
};
