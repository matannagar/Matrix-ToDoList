import * as React from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import { TodosProvider } from "./todo-context";
import "./index.scss";

export const App = () => {
  return (
    <div className="root">
      <TodosProvider>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosProvider>
    </div>
  );
};
