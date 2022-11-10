import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleRemoveTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App
      </h1>
      <p><small>Total Tasks: { todosCount } | Pending: { pendingTodosCount }</small></p>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={ todos }
            onRemoveTodo={ handleRemoveTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>
        <div className="col-5">
          <h4>Add New Task</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  );
};
