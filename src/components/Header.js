import React from 'react';
import {NavLink} from 'react-router-dom';   

export default () => {
    return(
        <div>
            <h1><NavLink to = '/'>NoteLog</NavLink></h1>
            <NavLink to = './create'>Add Note</NavLink>
        </div>
    );
}