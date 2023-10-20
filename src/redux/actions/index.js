export const addTodo = (title) => ({
  type: "add-todo",
  title,
});

export const updateTodo = (id, title) => ({
  type: "update-todo",
  id,
  title,
});

export const statusTodo = (id) => ({
  type: "status-todo",
  id,
});

export const deleteTodo = (id) => ({
  type: "delete-todo",
  id,
});
