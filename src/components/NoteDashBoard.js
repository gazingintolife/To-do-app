import React from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';
import {Link} from 'react-router-dom';


const NoteDashBoard = () => (
    <div>
        <div className="content-container">
            <div className="add-expense__button">
                <Link className="button dashboard__button" to="/create">Add Note</Link>
            </div>
        </div>
        <div className="content-container" id="dash-content">
            <div className="dashboard">
                <Todo/>
            </div>
            <div className="dashboard">
                <InProgress/>
            </div>
            <div className="dashboard">
                <Completed/>
            </div>
        </div>
    </div>
);

export default NoteDashBoard;