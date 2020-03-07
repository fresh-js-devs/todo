import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Wrapper from "./components/Wrapper/Wrapper";
import Task from "./components/Task/Task";

import tasksArray from "../src/data/tasks.json";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(tasksArray);
  const [editing, setEditing] = useState(null);
  const [newValue, setNewValue] = useState("");

  const renderTasks = () =>
    tasks.map(({ id, task }) => (
      <Task
        key={id}
        task={task}
        id={id}
        deleteTask={() => deleteTask(id)}
        editing={editing}
        setEditing={setEditing}
        editTask={() => editTask(id)}
        newValue={newValue}
        setNewValue={setNewValue}
        saveEditing={() => saveEditing(newValue, id)}
      ></Task>
    ));

  const renderNone = () => <h3 className="no-items">No items here 😥</h3>;

  const addTask = event => {
    if (event.key === "Enter") {
      if (!newTask) return;

      const newTaskObject = {
        id: Date.now(),
        task: newTask
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

  const saveEditing = (newVal, id) => {
    const oldTask = tasks.find(task => task.id === id);

    if (!newVal) return;
    oldTask.task = newVal;
  };

  return (
    <Layout>
      <h2 className="title">To-Do</h2>
      <Wrapper>
        <input
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
          name="task"
          className="input"
          onKeyPress={addTask}
        ></input>
      </Wrapper>
      <h2 className="task-title">Tasks</h2>
      {tasks.length === 0 ? renderNone() : renderTasks()}
    </Layout>
  );
}

export default App;
