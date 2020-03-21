import React from "react";

import "./List.css";

/**
 * FEEDBACK: To samé jako u Footer, Header, Layout :-)
 */
const List = ({ title, onCloseClicked, editTodo }) => {
  return (
    <li>
      <p>{title}</p>
      <div className="actions __orange">
        <button onClick={onCloseClicked}>Remove</button>
        <button onClick={editTodo} className="__completed">
          Done
        </button>
      </div>
    </li>
  );
};
export default List;
