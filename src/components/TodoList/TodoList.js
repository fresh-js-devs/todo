import React from "react";

import { ListGroup, Modal, Button } from "react-bootstrap";

const TodoList = ({ todos }) => {
  return <ListGroup>{renderTiles(todos)}</ListGroup>;
};

const renderTiles = todos =>
  todos.map(({  name, description }) => (
    <Modal.Dialog>
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

export default TodoList;
