import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({}) => {
    return(
        <div>
                <ul className="list-group my-5">
                    <h2 className="text-center">Todo List</h2>
                </ul>
                <button type="button" className="brn btn-danger">delete all from list</button>
                <TodoItem></TodoItem>
        </div>
        
    );

};
export default TodoList;