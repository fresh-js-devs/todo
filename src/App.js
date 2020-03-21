import React,{useState} from 'react';
/**
 * FEEDBACK: Doporučím oddělit si importy 3.strany (react, emotion...) s vlastními importy pro přehlednost
 *           Nenechávat nepoužité importy a proměnné 
 */
import './App.css';
import {Layout,Input,Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import Todo from './components/Todo/Todo';

import ToDoMocks from './mocks/ToDos.json';

/**
 * FEEDBACK: Maličká výtka za chybějící mezery mezi = :/
 */
function App() {
  const {Header,Content,Footer}=Layout;
  const {TextArea}=Input;
  
  const [todos,setTodos]=useState(ToDoMocks);
  const [description,setDescription]=useState('');
  const [title,setTitle]=useState('');
  const [editing,setEditing]=useState(null);
  const [newTitle,setNewTitle]=useState("");
  const [newDescription,setNewDescription]=useState("");
  
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

  const handleOnSaveCliked=(newTit,newDesc,id)=>{
    const old=todos.find(todo=>todo.id===id);
    old.title=newTit;
    old.description=newDesc;
    setNewTitle("");
    setNewDescription("");
    setEditing(null);
  }
  const handleCancelClicked=()=>{
    setNewDescription("");
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
        onSaveClicked={()=>handleOnSaveCliked(newTitle,newDescription,id)}
        onCancelClicked={handleCancelClicked}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}/>
      )
    })
  );

  return (
    <Layout>
      <Header className="header">
        <h2 style={{color:'white'}}>Simple CRUD Todo</h2>
      </Header>
      <Content className='site-layout-content'>
        <Input placeholder="Title..." 
        value={title} 
        onChange={event=>setTitle(event.target.value)} 
        className="Title-input"/>
        <TextArea rows={4} 
        placeholder="Todo Description"
        value={description} 
        onChange={event=>setDescription(event.target.value)}
        className="Description-input"/>
        <Button 
        type="primary"
        onClick={handleAddToDoClicked}>
          Add Todo
          <PlusOutlined />
        </Button>
        {
          renderTodos()
        }
      </Content>
      <Footer style={{textAlign:'center'}}>
        <span role="img" 
        aria-label="Smiling face with open mouth and cold sweat">
          Made by Matej Makara under severe time preassure &#128517;
        </span>
      </Footer>
    </Layout>
  );
}

export default App;
