import React from "react";
import './Todo.css';
import {Card,Button,Input} from 'antd';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';

const {Meta}=Card;

const Todo=({id,title,description,onDeleteClicked,onEditClicked,editing,onSaveClicked,newTitle,setNewTitle})=>{
    const editView=()=>{
        return(
            <Card hoverable={true} className="Todo">
            <Meta 
            title={<Input value={newTitle} onChange={e=>setNewTitle(e.target.value)}/>} 
            description={<Input.TextArea value={description}/>} 
            className="Todo-text"/>
            <Button type="primary" className="Card-button" onClick={()=>onSaveClicked(newTitle,id)}>
                Save
            </Button>
            </Card>
        )
    }
    const normalView=()=>{
        return(
            <Card hoverable={true} className="Todo">
                <Meta title={title} description={description} className="Todo-text"/>
                <Button type="danger" 
                shape="circle" 
                icon={<DeleteOutlined />}
                onClick={onDeleteClicked} 
                className="Card-button"/>
                <Button type="default" 
                shape="circle" 
                icon={<EditOutlined />} 
                className="Card-button"
                onClick={onEditClicked}/>
            </Card>
        )
    }
    return editing===id ? editView() : normalView();
    };
export default Todo;