import React from "react";

import { ListGroup, Modal, Button } from "react-bootstrap";

const TodoList = ({ todos, setTodos }) => {
  const renderTiles = todos =>
    todos &&
    todos.map(({ name, description , id}) => (
      <Modal.Dialog key={id}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Edit</Button>
          <Button variant="primary">Mark as Done</Button>
        </Modal.Footer>
      </Modal.Dialog>
    ));

  return <ListGroup>{renderTiles(todos)}</ListGroup>;
};

export default TodoList;
