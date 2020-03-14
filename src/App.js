import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import Task from './components/Task/Task';
import Tasks from './mocks/tasks.json';
import './App.css';
import {headingStyle, buttonStyle, inputStyle} from './styles/Styles';

function App() {
  const [tasks, setTasks] = useState(Tasks);
  const [taskname, setTaskName] = useState('');

  const inputsAreEmpty = taskname === '';

  const handleAddTaskClicked = () => {
    const newTask = {
      id: tasks.length + 10,
      taskname,
    };

    setTasks([newTask, ...tasks]);
    setTaskName('');
  };

  const handleCloseClicked = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  const handleEditClicked = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);
  }

  const renderTasks = () =>
  tasks.map(({id, taskname}) => (
    <Task
      key={id}
      taskname={taskname}
      onCloseClicked={() => handleCloseClicked(id)}
    />
  ));

  return (
  <Layout>
    <h1 style={headingStyle}>To-Do App</h1>
    <Form>
      <input
        value={taskname}
        onChange={event => setTaskName(event.target.value)}
        onClick={event => setTaskName('')}
        style={inputStyle}
        task='taskname'
        placeholder='task'
      />
      <button onClick={handleAddTaskClicked} style={buttonStyle} disabled={inputsAreEmpty}>
        Add task
      </button>
    </Form>
    {renderTasks()}
  </Layout>
  )
}

export default App;
