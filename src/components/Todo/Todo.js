import React, { useState } from "react";

import "./Todo.css";

const Todo = ({
  title,
  description,
  id,
  date,
  onCloseClicked,
  updateTodo
}) => {
  const [done, setDone] = useState(false);
  const [todo, setTodo] = useState({ id, title, description });
  const [editing, setEditing] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;

    console.log(` TU ${name}`);
    setTodo({ ...todo, [name]: value });
    console.log(todo);
  };
  const normalView = (
    <div className="todo">
      <div className={done ? "todo-heading __green" : "todo-heading __coral"}>
        <h2>{title}</h2>
        <div className="actions __light">
          <button
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button onClick={onCloseClicked}>Remove</button>
          <button className="__completed" onClick={() => setDone(!done)}>
            {done ? "Undone" : "Done"}
          </button>
        </div>
      </div>
      <div className="todo-body">
        <div className="todo-desc">
          <p>{description}</p>
        </div>
        <div className="todo-date">
          <p class="date">{date}</p>
        </div>
      </div>
    </div>
  );

  const editView = (
    <div className="todo">
      <div className={done ? "todo-heading __green" : "todo-heading"}>
        <input
          name="title"
          className={done ? "__green" : null}
          value={todo.title}
          onChange={e => handleInputChange(e)}
        />
        <div className="actions __light">
          <button
            className="save"
            onClick={() => {
              setEditing(false);
              updateTodo(todo.id, todo);
            }}
          >
            Save
          </button>

          {console.log(done)}
        </div>
      </div>
      <div className="todo-body">
        <div className="todo-desc">
          <textarea
            name="description"
            value={todo.description}
            onChange={e => handleInputChange(e)}
          ></textarea>
        </div>
        <div className="todo-date">
          <input
            name="date"
            type="date"
            value={todo.date}
            onChange={e => handleInputChange(e)}
            required
          ></input>
        </div>
      </div>
    </div>
  );
  return editing ? editView : normalView;
};
export default Todo;
