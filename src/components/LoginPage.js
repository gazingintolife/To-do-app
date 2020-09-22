import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => (
    <div>
        <h1>This is Login Page</h1>
        <button onClick = {props.startLogin}>Login With Google</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())     //we got access to dipatch via connect
});

export default connect(undefined, mapDispatchToProps)(LoginPage);  
// connect takes two arguments, first one is mapStateToProps and second one is
// mapDispatchToProps 