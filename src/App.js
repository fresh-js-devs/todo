import React, {useState} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import Form from './components/Card/Card';

import Users from './mocks/cards.json';

import {headingStyle, inputStyle, buttonStyle } from './styles/Styles';


function App() {

  const [users, setUsers] = useState(Users);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editedId, setEditedId] = useState(0);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const inputAreEmpty = name === '' | description === '';

  const renderedUserCards = () =>
  users && users.map(({id,name,description}) => (
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
      <h1 style={headingStyle}>Farma</h1>
      <Form>
        <input name="name" style={inputStyle} placeholder='Name'/>
        <textarea name="description" style={inputStyle} placeholder='description'/>
        <button className='button' style={buttonStyle}>Add user</button>

      </Form>
      {renderUserCards()}
    </Layout>
    
  );
}

export default App;
