import React, { useState } from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';
import {Link} from 'react-router-dom';
import {AddNote} from './AddNote';
import { bindActionCreators } from 'redux';


const NoteDashBoard = () => {
    
    const [visibility, setVisible] = useState(false);
    return (
        <div>
            <div className="add-note-btn">
            <button className="button" onClick={() => setVisible(true)}>Add Note</button>
            </div>
            {visibility==true && <AddNote/>}
            <div className="content-container" id="dash-content">
                <div className="dashboard__category">
                    <Todo/>
                </div>
                <div className="dashboard__category">
                    <InProgress/>
                </div>
                <div className="dashboard__category">
                    <Completed/>
                </div>
            </div>
        </div>
    );
}

export default NoteDashBoard;