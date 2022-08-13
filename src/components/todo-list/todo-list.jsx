import * as React from "react";
import { useContext } from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const [todos, setTodos] = useContext(TodosContext);



  const toggleCheck = (id) => {
    const newState = todos.map(task => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTodos(newState);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => onDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
