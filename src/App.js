import React, { useState } from "react";

import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import Todos from "./data/todos.json";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(Todos);
  return (
    <div>
      <TodoHeader></TodoHeader>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
