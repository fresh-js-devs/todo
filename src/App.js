import React, { useState }  from 'react';

import logo from './logo.svg';
import emoji from './emoji.png';
import pug from './pug.png';

import './App.css';
import './components/Item/Item.css'

import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import Item from './components/Item/Item.js';

import DefaultItems from './components/Item/Items.json';

import { headingStyle, inputStyle, buttonStyle } from './styles/Styles';

import Button from './components/atoms/Button.js'
import Input from './components/atoms/Input.js'
import TextArea from './components/atoms/TextArea.js'
import Header1 from './components/atoms/headers/Header1.js'


function App() {

  const [items, setItems] = useState(DefaultItems);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [editedId, setEditedId] = useState(0);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const [checkedItems, setCheckedItems] = useState('');
  const [checkedId, setCheckedId] = useState(0);
  const [checkedName, setCheckedName] = useState('');
  const [checkedDescription, setCheckedDescription] = useState('');

  const inputsAreEmpty = name === '' || description === '';



  // practice
  const [renameItem, setRenameItem] = useState('John');


  const handleAddItemClicked = () => {
    const newItem = {
      id: items.length + 10,
      name,
      description,
    };

    setItems([newItem, ...items]);
    setName('');
    setDescription('');
  };


  // const handleAddItemClicked = () => {
  //   const newItem = {
  //     id: checkedItems.length + 10,
  //     name,
  //     description,
  //   };

  //   setCheckedItems([newItem, ...checkedItems]);
  //   setCheckedName('');
  //   setCheckedDescription('');
  // };


  // const handleAddCheckedItem = id => {
  //   // save without found item.id
  //   const filteredItems = items.filter(item => item.id !== id);

  //   // save just found item.id
  //   const justFound = items.filter(item => item.id === id);

  //   // add item to checkedItems
  //   // setCheckedItems([justFound, ...checkedItems]);

  //   const newItem = {
  //     checkedId: checkedItems.length + 10,
  //     checkedName: justFound.name,
  //     checkedDescription: justFound.description,
  //   };
  //   setCheckedItems([newItem, ...checkedItems]);
    

  //   // delete item from normalView
  //   setItems(filteredItems);
  // };

  const handleDoneClicked = id => { 
    setCheckedId(id);    
    // handleDeleteClicked(id);
  };


  const handleDeleteClicked = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };


  const handleShowItemEditClicked = id => { 
    setEditedId(id);    // save editedId (even for later use in )
    const editedItem = items.find(item => item.id === id);    // 
    setEditedName(editedItem.name);
    setEditedDescription(editedItem.description);
  };


  const handleEditedItemSave = () => {
    const editedItems = items.map(item => {
      if(item.id === editedId){
        return{
          ...item,    // create 'new' user - set new props to found user by id 
          name: editedName,
          description: editedDescription,
        }
      }

      return item;
    })

    setItems(editedItems);
    setEditedId(0);   // close edit properly = set editedId to 0 
  }

  const handleEditedItemCancel = () => {
    setEditedId(0);   // close edit properly = set editedId to 0 
  }


  const renderItems = () => 
    items &&    // if items is not false (null, empty, undefined)
    items.map(({ id, name, description }) => (
    <Item
      id={id}
      key={id}
      name={name}
      description={description}

      editedId={editedId}
      setEditedId={setEditedId}
      editedName={editedName}
      setEditedName={setEditedName}
      editedDescription={editedDescription}
      setEditedDescription={setEditedDescription}

      checkedId={checkedId}
      setCheckedId={setCheckedId}
      

      onDeleteClicked={() => handleDeleteClicked(id)}
      onEditClicked={() => handleShowItemEditClicked(id)}
      onEditSaveClicked={() => handleEditedItemSave(id)}
      onEditCancelClicked={() => handleEditedItemCancel(id)}
      onclickDone= {() => handleDoneClicked(id)}     // for strike text after check checkBox
      // onclickDone= {() => handleAddCheckedItem(checkedItems)}     // for strike text after check checkBox
      // onclickDone= {() => handleAddCheckedItem(id)}     // for strike text after check checkBox
    />
  ));


  // const renderCheckedItems = () => 
  //   checkedItems &&    // if checkedItems is not false (null, empty, undefined)
  //   checkedItems.map(({ checkedId, checkedName, checkedDescription }) => (
  //   <Item
  //     id={checkedId}
  //     key={checkedId}
  //     name={checkedName}
  //     description={checkedDescription}

  //     editedId={editedId}
  //     setEditedId={setEditedId}
  //     editedName={editedName}
  //     setEditedName={setEditedName}
  //     editedDescription={editedDescription}
  //     setEditedDescription={setEditedDescription}

  //     checkedId={checkedId}
  //     setCheckedId={setCheckedId}
  //     checkedName={checkedName}
  //     checkedDescription={checkedDescription}

  //     onDeleteClicked={() => handleDeleteClicked(checkedId)}
  //     onEditClicked={() => handleShowItemEditClicked(checkedId)}
  //     onEditSaveClicked={() => handleEditedItemSave(checkedId)}
  //     onEditCancelClicked={() => handleEditedItemCancel(checkedId)}
  //     onclickDone= {() => handleDoneClicked(checkedId)}     // for strike text after check checkBox
  //   />
  // ));



  return (

    <Layout>
      {/* presentation practice */}
      <div style={headingStyle}>
        {/* <div>
          <p>{`Hello, ${renameItem}`}</p>
          <button onClick={() => setRenameItem('Bure')}> Rename </button>
        </div>

        <img src={emoji} className="App-emoji" alt="emoji" />
        <div className="App-emoji" alt="text"> JB</div> */}
      {/* presentation practice end */}

        <Header1 style={headingStyle}>My To-do list</Header1>
      </div>
      
      <Form>
        <Input
          value={name}
          onChange={event => setName(event.target.value)}
          style={inputStyle}
          name='name'
          placeholder='Item' />
        <TextArea
          value={description}
          onChange={event => setDescription(event.target.value)}
          style={inputStyle}
          name='description'
          placeholder='Description'
        ></TextArea>
        <Button onClick={handleAddItemClicked} style={buttonStyle} disabled={inputsAreEmpty}>
          <img src={pug} className="App-pug" alt="pug" />    
          Add item
          <img src={pug} className="App-pug" alt="pug" />  
        </Button>
      </Form>
        {renderItems()}
        {/* {renderCheckedItems()} */}
    </Layout>
  );
}

export default App;
