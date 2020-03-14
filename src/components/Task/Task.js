import React from 'react';

//import { headingStyle } from '../../styles/Styles';
import './Task.css';

const Task = ({taskname, onEditClicked, onCloseClicked}) => {
    return(
        <div className='task'>
            <div className='task-heading'>
                🦄 {taskname}
                <span>
                    <span onClick={onEditClicked} className='edit'>
                        📝  
                </span>
                    <span onClick={onCloseClicked} className='close'>
                        ❌
                </span>
                </span>
            </div>
        </div>
    );
};
export default Task;