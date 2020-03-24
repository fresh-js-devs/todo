import React , {useState} from 'react';
import './App.css';

//CSS STYLESHEETS
import ToDoList from './mocks/basicToDoList.json'; //import json
import Form from './components/Form/Form';
import { inputStyle} from "./styles/Styles";

//ATOMIC DESING
import Button from './components/atoms/Button'
import Item from './components/molecules/Item'

function App() {

  const[todolist, setTodolist] = useState(ToDoList);//useState(Users)...hook nastavuje defaultní stav
  const[task, setTask]=useState('');
  const[editedTask, setEditedTask] = useState('');
  const[editedID, setEditedID] = useState(0);

  const handelAddTaskClicked = ()=>{
    const newTask={
      id: todolist.length +10, //unikatni id pomoci delky
      task: task,
    };
    setTodolist([newTask, ...todolist]);//...=spread sintax, na konec přidat všechny ostatní users
    setTask('');       
  };



  const renderToDoList =()=>todolist.map((item)=>{
    return(
      <Item
      id={item.id}
      editedID={editedID}
      task={item.task}  
      editedTask={editedTask}      
      setEditedTask={setEditedTask}
      onEditClicked={()=>handleShowItemEditClicked(item.id)}
      onEditSaveClicked={()=>handleSaveClicked(item.id)}
      onEditCancelClicked={()=>handelonEditCancelClicked()}
      onCloseClicked={()=>handleCloseClicked(item.id)}
      />
    )
  })

  const  handleShowItemEditClicked = id =>{
    setEditedID(id);
    const editedTask=todolist.find(items=>items.id===id);
    setEditedTask(editedTask.task);
  }

  const  handleSaveClicked = id =>{
    const editedTodolist = todolist.map(item=>{
      if(item.id===id){
        return{
          ...item,
          task: editedTask,
        }
      }
      return item;
    })
    setTodolist(editedTodolist);
    setEditedID(0);
  }

  const  handelonEditCancelClicked = () =>{
    setEditedID(0);
  }

  const  handleCloseClicked = id =>{
    const filteredTodolist=todolist.filter(item=>item.id!==id);
    setTodolist(filteredTodolist);
  }

  //--------------------------------------------
 

  const inputsAreEmpty = task ==='';
  return (
    <div className="App">
      <h1>Welcome in vojtas ToDo app</h1>
      <Form>
      {/* <Button onClick={handelAddTaskClicked}      
      >added button</Button> */}      
      <input 
         value={task}
         onChange={event=>setTask(event.target.value)}         
         style={inputStyle} 
         name="task"
         placeholder="type new task">
      </input>
      <Button onClick={handelAddTaskClicked} disabled = {inputsAreEmpty}>add task</Button>
      </Form>      
      {renderToDoList()}
    <p>{editedID}</p>
    </div>
  );
}

export default App;
