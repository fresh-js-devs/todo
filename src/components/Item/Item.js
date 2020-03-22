import React from 'react'
import './Item.css';


const Item = ({
    id,
    editedID,
    task, 
    editedTask, 
    onCloseClicked,
    setEditedTask,
    onEditClicked,
    onEditSaveClicked,
    onEditCancelClicked,

}) => {
    const renderNormalView = () => {
        return (
            <>
                    <div className="item-heading">
                    <h2>{id}</h2>
                    <h2>{task}</h2>                        
                    <span onClick={onCloseClicked} className='close'>
                            throw off this task
                    </span>
                    </div>                   
                    <button type="button" onClick={onEditClicked}>edit</button>
            </>
        );
    };
    const isEditActive = id === editedID;    

    const renderEditView = () => {
        return (
            <div className="item-editing">
                
                <textarea
                    value= {editedTask}
                    onChange={event => setEditedTask(event.target.value)}
                    placeholder='Task'
                />
                <button type="button" onClick={onEditSaveClicked}>save</button>
                <button type="button" onClick={onEditCancelClicked}>cancel</button>
            </div>
        );
    };
    return (
        <div className='item'>
            {isEditActive ? renderEditView() : renderNormalView()};
        </div>
    )
};
export default Item;