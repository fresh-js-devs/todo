import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoHeaderForm = ({ todos, setTodos }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodoClick = () => {
    const newTodo = {
      id: todos.length + 10,
      name,
      description
    };

    setTodos([newTodo, ...todos]);

    setName("");
    setDescription("");

    console.log(todos);
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Gimme name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Tell me what you want..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={() => handleAddTodoClick()}
      >
        Add
      </Button>
    </Form>
  );
};

export default TodoHeaderForm;
