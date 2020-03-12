import React, { useState } from "react";

import styled from "@emotion/styled";
import { Modal, Button, Form, Alert, Card, Row, Col } from "react-bootstrap";

const Wrapper = styled.div({
  minWidth: "200px",
  minHeight: "200px"
});

const WrapperDone = styled.div({
  maxWidth: "500px",
  minHeight: "200px",
  margin: "auto",
  paddingTop: "10px"
});

///Handles each card
const TodoCard = ({ todo, onCloseClicked, onSaveClicked, onDoneClicked }) => {
  const now = new Date();
  const deadline = new Date(todo.deadline);
  const [editActive, setEditActive] = useState(false);
  const [todoDone, setTodoDone] = useState(false);
  const [todoDoneDate, setTodoDoneDate] = useState();
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const cancelClicked = () => {
    setEditActive(!editActive);
    setEditedName(todo.name);
    setEditedDescription(todo.description);
  };

  const saveClicked = () => {
    onSaveClicked(todo.id, editedName, editedDescription);
    setEditedName("");
    setEditedDescription("");
    setEditActive(false);
  };

  const doneClicked = () => {
    const date = new Date();
    setTodoDoneDate(
      `${date.getDay()}.${date.getMonth()} ${date.getFullYear()}`
    );
    setTodoDone(true);
    onDoneClicked(todo.id);
  };

  const normalView = () => {
    return (
      <Wrapper>
        <Modal.Dialog>
          <Card
            style={{
              backgroundColor: deadline > now ? "white" : "rgb(248,215,218)"
            }}
          >
            <Modal.Header closeButton onClick={() => onCloseClicked(todo.id)}>
              <Modal.Title>{todo.name}</Modal.Title>

              <p style={{marginLeft: '10px'}}>Deadline: {todo.deadline}</p>
            </Modal.Header>

            <Modal.Body>
              <p>{todo.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <Row>
                <Col>
                  <h3>{deadline > now ? "" : "After deadline!"}</h3>
                </Col>
                <Col xs={3}>
                  <Button
                    variant="secondary"
                    onClick={() => setEditActive(!editActive)}
                  >
                    Edit
                  </Button>
                </Col>
                <Col xs={4}>
                  <Button variant="primary" onClick={() => doneClicked()}>
                    Mark as Done
                  </Button>
                </Col>
              </Row>
            </Modal.Footer>
          </Card>
        </Modal.Dialog>
      </Wrapper>
    );
  };
  const editView = () => {
    return (
      <Wrapper>
        <Modal.Dialog>
          <Modal.Header>
            <Form.Control
              type="text"
              value={editedName}
              onChange={e => setEditedName(e.target.value)}
            />
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              as="textarea"
              rows="5"
              value={editedDescription}
              onChange={e => setEditedDescription(e.target.value)}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={() => saveClicked()}>
              Save
            </Button>
            <Button variant="danger" onClick={() => cancelClicked()}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Wrapper>
    );
  };
  const doneView = () => {
    return (
      <WrapperDone>
        <Alert variant="success">
          <Alert.Heading>{todo.name}</Alert.Heading>
          <p>{todo.description}</p>
          <hr />
          <p className="mb-0">Was done: {todoDoneDate}</p>
        </Alert>
      </WrapperDone>
    );
  };

  return todoDone ? doneView() : editActive ? editView() : normalView();
};

export default TodoCard;
