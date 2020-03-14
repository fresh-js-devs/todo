import React from 'react';

const Item = ({ 
    id,
    name, 
    description, 

    editedId,
    editedName,
    setEditedName,          // predam set z App.js, jen kdyz jej pak setuju v metode (nize)
    editedDescription,  
    setEditedDescription,   

    checkedId,
    setCheckedId,

    onDeleteClicked, 
    onEditClicked,
    onEditSaveClicked,
    onEditCancelClicked,

    onclickDone 
}) => {

    const isEditActive = id === editedId;
    const isChecked = id === checkedId;

    const renderNormalView = () => {
        return ( 
            // reactFragment below '<>'- then we could type without classic div ... div is match after last return condition
            <>
                <div className='backFrame'>
                    <div className='frame'>   
                        <b>{name}:</b>
                        <span> {description}</span>
                        <div className='other'>
                            <span onClick={onEditClicked} className='edit'> Edit</span>
                            <span onClick={onDeleteClicked} className='close'> Delete</span>
                            <input 
                                type="checkbox" 
                                className='largerCheckBox' 
                                onClick={onclickDone} 
                                // onChange={event => setCheckedId()}
                            />
                        </div>
                    </div>
                </div>    
            </>
        );
    }


    const renderEditView = () => {
        return (
            <>
                <div className="editDivInput">
                    <input 
                        type="text"
                        value={editedName}
                        onChange={event => setEditedName(event.target.value)}
                        placeholder='Name'
                    />
                    <textarea 
                        className="editDivInput"
                        value={editedDescription}
                        onChange={event => setEditedDescription(event.target.value)} 
                        placeholder='Description'                    
                        rows={2}>
                    </textarea>
                    <button onClick={onEditSaveClicked}>Save change</button>
                    <button onClick={onEditCancelClicked}>Cancel</button>
                </div>
            </>
        )
    }

    const renderCheckedView = () => {
        return ( 
            // reactFragment below '<>'- then we could type without classic div ... div is match after last return condition
            <>
                <div className='backFrame'>
                    <div className='frame'>   
                        <strike>
                            <b> {name}:</b>
                            <span> {description}</span>
                        </strike>
                        
                        <div className='other'>
                            <span onClick={onEditClicked} className='edit'> Edit</span>
                            <span onClick={onDeleteClicked} className='close'> Delete</span>
                            <input type="checkbox" className='largerCheckBox' onClick={onclickDone}/>
                        </div>
                    </div>
                </div>    
            </>
        );
    }
    

    

    return (
        <div>
            {isEditActive ? renderEditView() : renderNormalView() }
            {isChecked ? renderCheckedView() : ''}
        </div>
        
    );

};


export default Item;
