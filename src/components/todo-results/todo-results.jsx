import * as React from "react";
import { useContext } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.scss";

export const TodoResults = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const calculateChecked = () => { };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
