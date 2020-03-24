import React from 'react';
import styled from '@emotion/styled';

  const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid;
    padding-right: 10px;
  `;

const CustomButton = styled.span`
    color: red;
    cursor: pointer;
    border: solid;
`;

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
                    <Heading>
                    <h2>{id}</h2>
                    <h2>{task}</h2>                        
                    <CustomButton onClick={onCloseClicked} >
                            throw off this task
                    </CustomButton>
                                     
                    <button type="button"  onClick={onEditClicked}>edit</button>
                    </Heading>  
        )
    };
    const isEditActive = id === editedID;    

    const renderEditView = () => {
        return (
            
            <Heading>
                    <h2>{id}</h2>
                    <textarea enabled
                        value= {editedTask}
                        onChange={event => setEditedTask(event.target.value)}
                        placeholder='Task'
                    />
                    <button type="button" onClick={onEditSaveClicked}>save</button>
                    <button type="button" onClick={onEditCancelClicked}>cancel</button>
            </Heading>   
            
        )
    };
    return (
        <div className='item'>
            {isEditActive ? renderEditView() : renderNormalView()};
        </div>
    )
};
export default Item;