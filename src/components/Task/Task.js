import React from "react";
import "./Task.css";

const Task = ({ name }) => {
  return (
    <div className="card-wrapper">
      <h4 className="card-title">{name}</h4>
      <span className="delete-task">Delete</span>
    </div>
  );
};

export default Task;
