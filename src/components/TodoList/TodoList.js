import React from "react";

import TodoCard from "./TodoCard";

import { ListGroup } from "react-bootstrap";

///Handles actions on each todo
const TodoList = ({ todos, setTodos }) => {
  const closeClicked = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const saveClicked = (id, name, description) => {
    const newTodo = {
      id: id,
      name,
      description
    };
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos([newTodo, ...filteredTodos]);
  };

  const doneClicked = id => {
    const todo = todos.find(todo => todo.id === id);
    const filteredTodos = todos.filter(todo => todo.id !== id);
    filteredTodos.push(todo);
    setTodos(filteredTodos);
  };

  const renderTiles = todos =>
    todos &&
    todos.map(todo => (
      <TodoCard
        key={todo.id}
        todo={todo}
        onCloseClicked={closeClicked}
        onSaveClicked={saveClicked}
        onDoneClicked={doneClicked}
      />
    ));

  return <ListGroup>{renderTiles(todos)}</ListGroup>;
};

export default TodoList;
