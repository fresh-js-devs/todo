import React from 'react';

//import { headingStyle } from '../../styles/Styles';
import './Task.css';

const Task = ({taskname, onCloseClicked}) => {
    return(
        <div className='task'>
            <div className='task-heading'>
                <h4>{taskname}</h4>
                <span onClick={onCloseClicked} className='close'>
                    Close
                </span>
            </div>
        </div>
    );
};
export default Task;