import React from "react";
import "./Task.css";

const Task = ({
  task,
  id,
  deleteTask,
  editing,
  setEditing,
  editTask,
  newValue,
  setNewValue,
  saveEditing,
  cancelEditing
}) => {
  const read = () => {
    return (
      <div className="card-wrapper">
        <h4 className="card-title">{task}</h4>
        <div className="icons-wrapper">
          <span className="delete-task" onClick={deleteTask}>
            🗑️
          </span>
          <span className="edit-task" onClick={editTask}>
            🖊️
          </span>
        </div>
      </div>
    );
  };

  const edit = () => {
    return (
      <div className="card-wrapper">
        <input
          className="edit-input"
          value={newValue}
          name="edit"
          onChange={e => setNewValue(e.target.value)}
        ></input>
        <div className="editing-icons-wrapper">
          <span className="save-task" onClick={() => saveEditing(newValue, id)}>
            ✔️
          </span>
          <span className="cancel-task" onClick={cancelEditing}>
            ❌
          </span>
        </div>
      </div>
    );
  };

  return editing === id ? edit() : read();
};

export default Task;
