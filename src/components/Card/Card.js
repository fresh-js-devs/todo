import React from "react";

import "./Card.css";

const Card = ({
  name,
  id,
  description,
  onCloseClicked,
  onEditClicked,
  onEditSaveClicked,
  editedName,
  editedDescription,
  setEditedName,
  setEditedDescription,
  editedId
}) => {
  const renderEditView = () => {
    return (
      <div className="card-editing">
        <input
          type="text"
          value={editedName}
          onChange={event => setEditedName(event.target.value)}
          placeholder="Name"
        />
        {/* <textarea
          placeholder="Description"
          value={editedDescription}
          rows={10}
          onChange={event => setEditedDescription(event.target.value)}
      ></textarea>*/}
        <div class="btn-group special" role="group" aria-label="...">
          <button
            type="button"
            onClick={onEditSaveClicked}
            class="btn btn-save"
          >
            Save
          </button>
        </div>
      </div>
    );
  };

  const renderNormalView = () => {
    return (
      <>
        <div className="card-heading">
          <h2>{name}</h2>
        </div>
        {/*<p>{description}</p>*/}
        <div class="btn-group special" role="group" aria-label="...">
          <button onClick={onCloseClicked} type="button" class="btn btn-close">
            Close
          </button>
          <button onClick={onEditClicked} type="button" class="btn btn-edit">
            Edit
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="card">
      {id === editedId ? renderEditView() : renderNormalView()}
    </div>
  );
};

export default Card;
