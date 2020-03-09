import React from 'react'
const TodoItem = ({ }) => {
    return (
        <div className="card card-body my-3">
            <form>
                <div className="input-group">
                    
                    <input type="text" className="form-control" placeholder="add an item" />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );

};
export default TodoItem;