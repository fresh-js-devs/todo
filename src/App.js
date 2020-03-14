import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Form from "./components/Form/Form";

import Users from "./mocks/cards.json";

import { headingStyle, inputStyle, buttonStyle } from "./styles/Styles";
import Card from "./components/Card/Card";

import "./App.css";

function App() {
  const [users, setUsers] = useState(Users);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editedId, setEditedId] = useState(0);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const inputsAreEmpty = name === "";

  const handleAddUserClicked = () => {
    const newUser = {
      id: users.length + 10,
      name,
      description
    };

    setUsers([newUser, ...users]);
    setName("");
    setDescription("");
  };

  const handleCloseClicked = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleShowUserEditClicked = id => {
    setEditedId(id);
    const editedUser = users.find(user => user.id === id);
    setEditedName(editedUser.name);
    setEditedDescription(editedUser.description);
  };

  const handleEditUserCardClicked = id => {
    const editedUsers = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: editedName,
          description: editedDescription
        };
      }

      return user;
    });

    setUsers(editedUsers);
    setEditedId(0);
  };

  const renderUserCards = () =>
    users &&
    users.map(({ id, name, description }) => (
      <Card
        key={id}
        id={id}
        editedId={editedId}
        name={name}
        description={description}
        onCloseClicked={() => handleCloseClicked(id)}
        onEditClicked={() => handleShowUserEditClicked(id)}
        onEditSaveClicked={() => handleEditUserCardClicked(id)}
        editedName={editedName}
        editedDescription={editedDescription}
        setEditedName={setEditedName}
        setEditedDescription={setEditedDescription}
      />
    ));

  return (
    <Layout>
      <Form>
        {/*  <input
          value={name}
          onChange={event => setName(event.target.value)}
          style={inputStyle}
          name="name"
          placeholder="Name"
        />*/}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <h1 style={headingStyle}>To-do list</h1>
        <div className="formium">
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            style={inputStyle}
            name="name"
            placeholder="Task"
          />
          <button
            className="button"
            onClick={handleAddUserClicked}
            style={buttonStyle}
            size="1500px"
            disabled={inputsAreEmpty}
          >
            +
          </button>
        </div>
      </Form>
      <div className="cards">{renderUserCards()}</div>
    </Layout>
  );
}

export default App;
