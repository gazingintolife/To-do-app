import React from 'react';
import NoteForm from './NoteForm';
import {addNote} from '../actions/notes';
import { connect } from 'react-redux';
import Todo from './Todo';
import InProgress from './InProgress';
import Completed from './Completed';

const AddNote = (props) =>{
    return (
        <div>
        <NoteForm 
        onSubmit = {(note) => {
            props.dispatch(addNote(note));
            props.history.push('/');
        }}
        onModalClose = {() => {
            props.history.push('/');
        }}
        />
        <Todo/>
        <InProgress/>
        <Completed/>
        </div>
    );
}

export default connect()(AddNote);

