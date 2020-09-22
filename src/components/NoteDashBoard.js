import React from 'react';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';
import Header from './Header';


const NoteDashBoard = () => (
    <div>
        <Todo/>
        <InProgress/>
        <Completed/>
    </div>
);

export default NoteDashBoard;