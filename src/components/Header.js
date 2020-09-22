import React from 'react';
import {NavLink} from 'react-router-dom';   
import { connect } from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header =  ({startLogout}) => {
    return(
        <div>
            <h1><NavLink to = '/dashboard'>NoteLog</NavLink></h1>
            <NavLink to = './create'>Add Note</NavLink>
            <button onClick = {startLogout}>Log Out</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);