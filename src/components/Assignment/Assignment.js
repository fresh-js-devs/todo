import React from "react";
import "./Assignment.css";

const Assignment = ({
  id,
  name,
  description,
  date,
  onCloseClicked,
  editedId,
  editedName,
  editedDescription,
  editedDate,
  setEditedDescription,
  setEditedDate,
  setEditedName,
  onEditSaveClicked,
  onEditClicked,
  onEditCancelClicked
}) => {
  const isEditActive = id === editedId;
  const renderNormalView = () => {
    return (
      <>
        <div>
          <div className="asignment-heading">
            <h2>{name}</h2>
          </div>

          <p className="asignment-description">{description}</p>
          <p className="asignment-deadline"> DEADLINE: {date}</p>

          <div className="asignment-buttons">
            <button onClick={onCloseClicked}>Remove</button>
            <button onClick={onEditClicked}>Edit</button>
          </div>
        </div>
      </>
    );
  };

  const renderEditView = () => {
    return (
      <div className="assignment-editing">
        <input
          type="text"
          value={editedName}
          onChange={event => setEditedName(event.target.value)}
          placeholder="Name"
        />

        <textarea
          value={editedDescription}
          onChange={event => setEditedDescription(event.target.value)}
          placeholder="Description"
          rows={4}
        />
        <input
          value={editedDate}
          type="date"
          onChange={event => setEditedDate(event.target.value)}
        />

        <button onClick={onEditSaveClicked}>Save</button>
        <button onClick={onEditCancelClicked}>Cancel</button>
      </div>
    );
  };

  return (
    <div className="assignment">
      {isEditActive ? renderEditView() : renderNormalView()}
    </div>
  );
};

export default Assignment;
