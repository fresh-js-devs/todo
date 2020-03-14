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
  const [editedTaskName, setEditedTaskName] = useState('');
  const [editedId, setEditedId] = useState(0);

  const inputsAreEmpty = taskname === '';

  const handleAddTaskClicked = () => {
    const newTask = {
      id: Date(),
      taskname,
    };

    setTasks([newTask, ...tasks]);
    setTaskName('');
  };

  const handleShowTaskEditClicked = id => {
    setEditedId(id);
    const editedTask = tasks.find(task => task.id === id);
    setEditedTaskName(editedTask.name);
  };

  const handleEditTaskClicked = id => {
    const toBeEdited = tasks.map(task => {
      if (task.id === editedId) {
        return {
          ...task,
          taskname: editedTaskName,
        };
      }
      return task;
    });
    const editedTask = {
      id: toBeEdited.id,
      taskname,
    };

    setTasks(editedTask);
    setEditedId(0);
  };

  const handleCloseClicked = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  const renderTasks = () =>
    tasks.map(({ id, taskname }) => (
      <Task
        key={id}
        taskname={taskname}
        onEditTaskClicked={() => handleEditTaskClicked}
      onCloseClicked={() => handleCloseClicked(id)}
    />
  ));

  return (
  <Layout>
    <h1 style={headingStyle}>To-Do app</h1>
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
