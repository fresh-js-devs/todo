import React, { useState } from "react";
import "./App.css";

import Assignment from "./components/Assignment/Assignment";

import Form from "./components/Form/Form";

import Assignments from "./AssignmentsArray.json";

import {
  dateDivStyle,
  nameStyle,
  inputStyle,
  buttonStyle,
  dateStyle,
  headerStyle,
  bodyStyle,
  deadlineStyle
} from "./styles/Styles";

function App() {
  const [assignments, setAssignments] = useState(Assignments);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedId, setEditedId] = useState(0);

  const inputsAreEmpty =
    name === "" || description === "" || description === "";

  const handleAddUserClicked = () => {
    const newAssignmet = {
      id: assignments.length + 10,
      name,
      description,
      date
    };
    setAssignments([newAssignmet, ...assignments]);
    setName("");
    setDescription("");
    setDate("");
  };

  const handleShowUserEditClicked = id => {
    setEditedId(id);
    const editedAssignment = assignments.find(
      assignment => assignment.id === id
    );
    setEditedName(editedAssignment.name);
    setEditedDescription(editedAssignment.description);
    setEditedDate(editedAssignment.date);
  };

  const handleEditUserCardClicked = () => {
    const editedAssignments = assignments.map(assignment => {
      if (assignment.id === editedId) {
        return {
          ...assignment,
          name: editedName,
          description: editedDescription,
          date: editedDate
        };
      }
      return assignment;
    });
    setAssignments(editedAssignments);
    setEditedId(0);
  };

  const handleCloseClicked = id => {
    const filteredAssignments = assignments.filter(
      assignment => assignment.id != id
    );
    setAssignments(filteredAssignments);
  };

  const handleEditCancelClicked = () => {
    setEditedId(0);
  };

  const renderUserCards = () =>
    assignments.map(({ id, name, description, date }) => (
      <Assignment
        key={id}
        id={id}
        name={name}
        description={description}
        date={date}
        editedId={editedId}
        editedName={editedName}
        editedDescription={editedDescription}
        editedDate={editedDate}
        setEditedId={setEditedId}
        setEditedName={setEditedName}
        setEditedDate={setEditedDate}
        setEditedDescription={setEditedDescription}
        onCloseClicked={() => handleCloseClicked(id)}
        onEditClicked={() => handleShowUserEditClicked(id)}
        onEditSaveClicked={() => handleEditUserCardClicked(id)}
        onEditCancelClicked={() => handleEditCancelClicked(id)}
      />
    ));

  return (
    <div className="App">
      <h1 style={headerStyle}>To do</h1>
      <Form>
        <input
          style={nameStyle}
          name="name"
          placeholder="Name"
          onChange={event => setName(event.target.value)}
        />

        <textarea
          style={inputStyle}
          name="description"
          placeholder="Description"
          onChange={event => setDescription(event.target.value)}
        ></textarea>

        <div style={dateDivStyle}>
          <h3 style={deadlineStyle}>Deadline: </h3>
          <input
            style={dateStyle}
            type="date"
            onChange={event => setDate(event.target.value)}
          />
          <button
            style={buttonStyle}
            onClick={handleAddUserClicked}
            disabled={inputsAreEmpty}
          >
            Add
          </button>
        </div>
      </Form>
      <div style={bodyStyle}>{renderUserCards()}</div>
    </div>
  );
}

export default App;
