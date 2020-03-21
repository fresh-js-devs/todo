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
      <TodoHeader todos={todos} setTodos={setTodos}></TodoHeader>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;

/*
FEEDBACK:
- ked kliknem na edit, nezobrazuju sa mi povodne hodnoty, co z hladiska UX nemusi byt ideal
- Deadline inputu chýba dátum
- Logika by mala byt idealne v App.js, kazdopadne pouzil si ine delenie komponent, takze az taky problem to nie je

- Kod je pekny, prehladny, nemam moc co vytknut
- Bootstrap a UI cenim
- Styled Components, super
- Good job!
*/
