import React from 'react';
import NoteForm from './NoteForm';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';

export const AddNote = (props) => ( 
    <div>
        <NoteForm onSubmit = {(note) => {
            props.startAddNote(note);
            props.history.push('/');
        }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddNote: (note) => dispatch(startAddNote(note))
  });

export default connect(undefined, mapDispatchToProps)(AddNote);

