import * as React from "react";
import { useContext } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.scss";

export const TodoResults = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const calculateChecked = () => {
    let count = 0;
    todos.forEach(task => {
      if (task.checked) count++;
    })
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
