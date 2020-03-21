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

  // FEEDBACK
  // V JavaScripte existuju tzv. falsey values a prazdne stirngy su jednym z nich
  // tzn ten check mozes napisat aj napriklad takto:
  // const inputsAreEmpty = !name || !description
  // inak, mas tam 2x description
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
      // FEEDBACK
      // Weak equality operator sa v JS nepouziva nikdy
      // vzdy je lepsie pouzit strict equality !==, pretoze on porovnava ako typ, tak aj hodnotu
      // rozdiel medzi nimi je nasledovny.. ak by si pouzil 1 != '1', tak ti to vrati false, pretoze cekuje iba hodnoty
      // pomocou !== sa vies vyhnut necakanym errorom :)
      assignment => assignment.id != id
    );
    setAssignments(filteredAssignments);
  };

  // FEEDBACK
  // jedna sa o arrow funkciu, takze mozes kludne napisat
  // const handleEditCancelClicked = () => setEdited(0)
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
