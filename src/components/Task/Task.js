import React from 'react';

//import { headingStyle } from '../../styles/Styles';
import './Task.css';

const Task = ({taskname, onEditTaskClicked, onCloseClicked}) => {
    return(
        <div className='task'>
            <div className='task-heading'>
               <span role="img" aria-label="unicorn"> 🦄 {taskname}</span>
                <span>
                    <span role="img" aria-label="memo" onClick={onEditTaskClicked} className='edit'> 📝 </span>
                    <span role="img" aria-label="wastebasket" onClick={onCloseClicked} className='close'> 🗑️ </span>
                </span>
            </div>
        </div>
    );
};
export default Task;