import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Wrapper from "./components/Wrapper/Wrapper";
import Task from "./components/Task/Task";

function App() {
  return (
    <Layout>
      <h2 className="title">To-Do</h2>
      <Wrapper>
        <input className="input"></input>
        <button className="add-button">+</button>
      </Wrapper>
      <h2 className="task-title">Tasks</h2>
      <Task name="Test"></Task>
    </Layout>
  );
}

export default App;
