import * as React from "react";
import "./todo-form.scss";
import { useContext } from "react";
import { TodosContext } from "../../todo-context";


export const TodoForm = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => { };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
