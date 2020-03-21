import React, { useState, useEffect } from 'react';
/**
 * FEEDBACK: Je lepší si pro přehlednost rozdělit importy 3. strany (react, emotion...) od vlastních importů
 */
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';
import Tasks from './list/taskList.json';
import Button from './components/atoms/Button';
import Input from './components/atoms/Input';

function App() {
  const [tasks, setTasks] = useState(Tasks);
  const [taskName, setTaskName] = useState('');
  const [editedTaskName,setEditedTaskName] = useState('');
  const [editedId, setEditedId] = useState(0);
  const [completed, setCompleted] = useState(false);
  /**
   * FEEDBACK: Supr...správný formát konstanty
   */
  const LOCAL_STORAGE_KEY = 'listTodos';
  
  const inputsAreEmpty = taskName === '';

  /**
   * FEEDBACK: Tady je někdo popředu :D Cením
   */
  useEffect(() => {
    /**
     * FEEDBACK: Dávej si pozor na localStorage...měl bys prvně ocheckovat, jestli localStorage existuje (if (window.localStorage))
     */
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTasks(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  /**
   * FEEDBACK: Dobrý nápad pro ID
   */
  const handleAddTaskClicked = () => {
    const newTask = {
      id: Date.now().toString(),
      taskName,
      completed,
    };

    setTasks([newTask, ...tasks]);
    setTaskName('');
    setCompleted(false);
  };

  /**
   * FEEDBACK: Je to taková blbost, ale chybí ti mezera mezi if a závorkou
   */
  const handleCompletedTaskClicked = id => {
    setTasks(
      tasks.map(task => {
        if(task.id === id){
          return{
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleRemoveTaskClicked = id => {
      const filteredTasks = tasks.filter(task => task.id !== id);
      setTasks(filteredTasks);
  };

  const handleShowUSerEditClicked = id => {
    setEditedId(id);
    const editedTask = tasks.find(task => task.id === id);
    setEditedTaskName(editedTask.taskName);
  };

  const handleEditedTaskClicked = id => {
    const editedTasks = tasks.map(task =>{
      if(task.id === id){
        return{
          ...task,
          taskName: editedTaskName,
          completed: false,
        };
      };
      return task;
    });

    setTasks(editedTasks);
    setEditedId(0);
    setCompleted(false);
  };

  const handleEditCancelClicked = id => {
    const closeTasks = tasks.map(task =>{
      if(task.id === id){
        return{
          ...task,
          completed: false,
        };
      };
      return task;
    });

    setTasks(closeTasks);
    setEditedId(0);
    setCompleted(false);
  };

  /**
   * FEEDBACK: Aaaaaa prosím nedávat mezery mezi = u parametrů!!! key={id} prosím :)
   */
  const renderTodoTasks = () => 
  tasks.map(({id,taskName,completed}) => (
    <Todo
      key = {id}
      id = {id}
      editedId = {editedId}
      editedTaskName = {editedTaskName}
      setEditedTaskName = {setEditedTaskName}
      taskName = {taskName}
      completed = {completed}
      onEditClicked = {() => handleShowUSerEditClicked(id)}
      onEditSaveClicked = {() => handleEditedTaskClicked(id)}
      onEditCancelClicked = {() => handleEditCancelClicked(id)}
      onRemoveClicked = {() => handleRemoveTaskClicked(id)}
      onCompletedClicked = {() => handleCompletedTaskClicked(id)}
    />
  ));
  
  return (
    <Layout>
      <h1>TODO List</h1>
      <Form>
        <Input
          value = {taskName}
          onChange = {event => setTaskName(event.target.value)}
          name = 'taskName'          
          placeholder = 'Task'
          />
          <Button onClick = {handleAddTaskClicked} disabled = {inputsAreEmpty}>+</Button>      
      </Form>
      {renderTodoTasks()}
    </Layout>    
  );
}

export default App;
