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
            <button className="button add" onClick={() => setVisible(!visibility)}>Add Note</button>
            </div>
            {visibility==true && <AddNote/>}
             <div className="content-container" id="dash-content">
                <Todo/>
                <InProgress/>
                <Completed/>
            </div>
        </div>
    );
}

export default NoteDashBoard;