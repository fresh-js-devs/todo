import React from "react";
import "./Task.css";

const Task = ({
  title,
  id,
  deleteTask,
  editing,
  editTask,
  newValue,
  setNewValue,
  saveEditing,
  cancelEditing,
  doneTask,
  isDone
}) => {
  const read = () => {
    return (
      <div className="card-wrapper">
        <h4 className={isDone ? "card-title-done" : "card-title"}>{title}</h4>
        <div className="icons-wrapper">
          {/* 
          FEEDBACK 
          Pre rendrovanie iba jednej veci mozes kludne pouzit operator &&
          isDone && <span></span>
          jednoduchsie, rychlejsie, prehladnejsie :)
          */}
          <span className="action-icons" onClick={deleteTask}>
            🗑️
          </span>
          {isDone ? null : (
            <span className="action-icons" onClick={editTask}>
              🖊️
            </span>
          )}
          {isDone ? null : (
            <span className="action-icons" onClick={doneTask}>
              ✔️
            </span>
          )}
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
          <span className="cancel-task" onClick={cancelEditing}>
            ❌
          </span>
          <span className="done-task" onClick={() => saveEditing(newValue, id)}>
            ✔️
          </span>
        </div>
      </div>
    );
  };
  // FEEDBACK
  // su to rendrovacie funkcie, takze by som zvolil deskriptivnejsie nazvy
  return editing === id ? edit() : read();
};

export default Task;
