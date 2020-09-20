import React from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';


const NoteDashBoard = () => (
    <div>
        <Todo/>
        <InProgress/>
        <Completed/>
    </div>
);

export default NoteDashBoard;