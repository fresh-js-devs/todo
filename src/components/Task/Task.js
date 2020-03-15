import React from 'react';

//import { headingStyle } from '../../styles/Styles';
import './Task.css';
import { inputStyle } from '../../styles/Styles';

const Task = ({taskname, onEditTaskClicked, onCloseClicked}) => {
    return(
        <div className='task' key={Task.id} >
            <div className='task-heading'>
                <p>
                    <span>
                    <span role="img" aria-label="unicorn"> 🦄 </span>
                        <input
                            style={inputStyle}
                            type="text"
                            id={Task.id}
                            value={taskname}
                        />
                        <span role="img" aria-label="wastebasket" onClick={onCloseClicked} className='close'> 🗑️ </span>
                    </span>
                </p>
            </div>
        </div>
    );
};
export default Task;