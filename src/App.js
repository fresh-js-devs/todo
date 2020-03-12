import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Wrapper from "./components/Wrapper/Wrapper";
import Task from "./components/Task/Task";

import Input from "./components/atoms/Input";

import tasksArray from "../src/data/tasks.json";
import Title from "./components/atoms/Title";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(tasksArray);
  const [editing, setEditing] = useState(null);
  const [newValue, setNewValue] = useState("");

  const renderTasks = () =>
    tasks.map(({ id, task, done }) => (
      <Task
        key={id}
        title={task}
        id={id}
        deleteTask={() => deleteTask(id)}
        editing={editing}
        editTask={() => editTask(id)}
        newValue={newValue}
        setNewValue={setNewValue}
        saveEditing={() => saveEditing(newValue, id)}
        cancelEditing={cancelEditing}
        doneTask={() => doneTask(id)}
        isDone={done}
      ></Task>
    ));

  const renderNone = () => <h3 className="no-items">No items here 😥</h3>;

  const addTask = event => {
    if (event.key === "Enter") {
      if (!newTask) return;

      const newTaskObject = {
        id: Date.now(),
        task: newTask,
        done: false
      };

      setTasks([newTaskObject, ...tasks]);
      setNewTask("");
    }
  };

  const deleteTask = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTask = id => {
    setEditing(id);
  };

  const doneTask = id => {
    const taskDone = tasks.find(task => task.id === id);
    const completedTasks = [...tasks];

    taskDone.done = true;

    setTasks(completedTasks);
  };

  const saveEditing = (newVal, id) => {
    const oldTask = tasks.find(task => task.id === id);

    if (!newVal) return;
    oldTask.task = newVal;

    setNewValue("");
    setEditing(null);
  };

  const cancelEditing = () => {
    setEditing(null);
    setNewValue("");
  };

  return (
    <Layout>
      <Title className="title">To-Do</Title>
      <Wrapper>
        <Input
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
          name="task"
          onKeyPress={addTask}
        ></Input>
      </Wrapper>
      <h2 className="task-title">Tasks</h2>
      {tasks.length === 0 ? renderNone() : renderTasks()}
    </Layout>
  );
}

export default App;
