import React from 'react'
const TodoItem = ({ }) => {
    return (
        <li className="list-group-item text-caitalize d-flex justify-content-between my-2">
            <h5>titel</h5>
            <div className="todo-icon">
                <span className="mx-2 text-success">
                    <i className="fas fa-pen" />
                </span>
                <span className="mx-2 text-success">
                    <i className="fas fa-trash" />
                </span>
            </div>

        </li>        
    
    );

};
export default TodoItem;