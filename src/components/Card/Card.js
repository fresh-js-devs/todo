import React from 'react';

import './Card.css';

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
  editedId,
}) => {
  const renderEditView = () => {
    return (
      <div className='card-editing'>
        <input
          type='text'
          value={editedName}
          onChange={event => setEditedName(event.target.value)}
          placeholder='Name'
        />
        <textarea
          placeholder='Description'
          value={editedDescription}
          rows={10}
          onChange={event => setEditedDescription(event.target.value)}
        ></textarea>

        <button onClick={onEditSaveClicked}>Save</button>
      </div>
    );
  };

  const renderNormalView = () => {
    return (
      <>
        <div className='card-heading'>
          <h2>{name}</h2>
          <span onClick={onCloseClicked} className='close'>
            Close
          </span>
        </div>
        <p>{description}</p>
        <button onClick={onEditClicked}>Edit</button>
      </>
    );
  };

  return (
    <div className='card'>
      {id === editedId ? renderEditView() : renderNormalView()}
    </div>
  );
};

export default Card;
