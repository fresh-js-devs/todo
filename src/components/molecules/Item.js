import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button'


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
                                     
                    <Button onClick={onEditClicked}>edit</Button>
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
                    <Button onClick={onEditSaveClicked}>save</Button>
                    <Button type="button" onClick={onEditCancelClicked}>cancel</Button>
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