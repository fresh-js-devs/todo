import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";

const TodoHeaderForm = ({ todos, setTodos }) => {
  const date = new Date();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(date);
  const inputsAreEmpty = name === "" || description === "";

  const handleAddTodoClick = () => {
    console.log(deadline);
    const newTodo = {
      id: todos.length + 10,
      name,
      description,
      deadline: `${deadline.getDay()}.${deadline.getMonth()} ${deadline.getFullYear()}`
    };

    setTodos([newTodo, ...todos]);

    setName("");
    setDescription("");
    setDeadline(date);
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

      <Form.Row>
        <Col>
          <Form.Control
            type="date"
            min='24-12-1998'
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => handleAddTodoClick()}
            disabled={inputsAreEmpty}
          >
            Add
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default TodoHeaderForm;
