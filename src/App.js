import React,{useState} from 'react';
import './App.css';
import {Layout,Input,Button} from 'antd';
import Todo from './components/Todo/Todo';

import ToDoMocks from './mocks/ToDos.json';

function App() {
  const {Header,Content,Footer}=Layout;
  const {TextArea}=Input;
  
  const [todos,setTodos]=useState(ToDoMocks);
  const [description,setDescription]=useState('');
  const [title,setTitle]=useState('');
  const [editing,setEditing]=useState(null);
  const [newTitle,setNewTitle]=useState("");
  
  const handleAddToDoClicked=()=>{
    const newTodo={
      id:todos.length +10,
      title:title,
      description
    };
    if(title!==''){
      setTodos([newTodo, ...todos]);
      setTitle('');
      setDescription('');
    }
  };

  const handleOnDeleteClicked=(id)=>{
    const filteredTodos=todos.filter(todo=>todo.id!==id)
    setTodos(filteredTodos);
  }
  const handleOnEditClicked=(id)=>{
    setEditing(id);
  }

  const handleOnSaveCliked=(newVal,id)=>{
    const old=todos.find(todo=>todo.id===id);
    
    if(!newVal) return;
    old.title=newVal;
    setNewTitle("");
    setEditing(null);
  }

  const renderTodos=()=>(
    todos.map(({id,title,description})=>{
      return(
        <Todo key={id}
        id={id}
        title={title}
        description={description}
        onDeleteClicked={()=>handleOnDeleteClicked(id)}
        onEditClicked={()=>handleOnEditClicked(id)}
        editing={editing}
        onSaveClicked={()=>handleOnSaveCliked(newTitle,id)}
        newTitle={newTitle}
        setNewTitle={setNewTitle}/>
      )
    })
  );

  return (
    <Layout>
      <Header>
        <h2 style={{color:'white'}}>Simple CRUD ToDo</h2>
      </Header>
      <Content className='site-layout-content'>
        <Input placeholder="Title..." value={title} onChange={event=>setTitle(event.target.value)}></Input>
        <TextArea 
        rows={4} 
        placeholder="ToDo Description"
        value={description} onChange={event=>setDescription(event.target.value)}></TextArea>
        <Button 
        type="primary"
        onClick={handleAddToDoClicked}>
          Add ToDo
        </Button>
        {
          renderTodos()
        }
      </Content>
      <Footer style={{textAlign:'center'}}>
        This is my footer
      </Footer>
    </Layout>
  );
}

export default App;
