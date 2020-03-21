import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './mocks/basicToDoList.json'; //import json
function App() {

  const[listOfTask, setListOfTask] = useState(ToDoList);//useState(Users)...hook nastavuje defaultní stav
  const[task, setTask]=useState('');
  

  return (
    <div className="App">
      <h1>ahoj</h1>
    </div>
  );
}

export default App;
