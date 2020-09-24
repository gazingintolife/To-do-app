import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className=".box-layout__title"><strong>To-Do App</strong></h1>
            <button className="button" onClick = {startLogin}>Login With Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())     //we got access to dipatch via connect
});

export default connect(undefined, mapDispatchToProps)(LoginPage);  
// connect takes two arguments, first one is mapStateToProps and second one is
// mapDispatchToProps 