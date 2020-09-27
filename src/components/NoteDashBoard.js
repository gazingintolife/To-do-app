import React, { useState } from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';
import AddNote from './AddNote';


const NoteDashBoard = () => {
    
    const [visibility, setVisible] = useState(false);
    return (
        <div>
            <div className="add-note-btn">
            <button className="button" onClick={() => setVisible(!visibility)}>Add Note</button>
            </div>
            {visibility==true && <AddNote/>}
            <div className="content-container" id="dash-content">
                <div className="dashboard__category todo">
                    <Todo/>
                </div>
                <div className="dashboard__category inprogress">
                    <InProgress/>
                </div>
                <div className="dashboard__category completed">
                    <Completed/>
                </div>
            </div>
        </div>
    );
}

export default NoteDashBoard;