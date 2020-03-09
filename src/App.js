import React from 'react';
import logo from './logo.svg';
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import uuid from "uuid"
//import 'bootstrap/dist/css/bootstrap.css';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8">
            
          </div>
        </div>
      </div>
      hello from papp;
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
// https://youtu.be/8QBYrKhqgFI?t=609