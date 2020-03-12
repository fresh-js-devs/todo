import React from 'react';
import './Todo.css';

const Todo = 
({
    id,
    taskName,
    completed,
    onRemoveClicked,
    onCompletedClicked,
    editedId,
    editedTaskName,
    setEditedTaskName,
    onEditClicked,
    onEditSaveClicked,
    onEditCancelClicked,
}) => {

    const isEditActive = id === editedId;

    const renderEditView = () =>{
        return(
            <>
                <div className = 'todo-head'>
                    <input type = 'text' value = {editedTaskName} className = 'editingText' onChange = {event => setEditedTaskName(event.target.value)} placeholder = 'Task name'></input>                
                </div>
                <button onClick = {onEditSaveClicked} className = 'edit' >Save</button>
                <button onClick = {onEditCancelClicked} className = 'remove'>Cancel</button>
            </>
            
        );
    };


    const renderNormalView = () => {
        return(
            <>
                <div className = 'todo-head'>
                    <h3 style = {{textDecoration: completed ? 'line-through' : ''}}>{taskName}</h3>
                    <input type = 'checkbox' onClick = {onCompletedClicked} className = 'completedCheckbox'></input>                    
                </div>
                <button onClick = {onEditClicked} className = 'edit'>Edit</button>
                <button onClick = {onRemoveClicked} className = 'remove'>Remove</button>
            </>
            
        );
    };
    return(
        <div className = 'todo-item'>
            {isEditActive ? renderEditView() : renderNormalView()}
        </div>
    );
};

export default Todo;
