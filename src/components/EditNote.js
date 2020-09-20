import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import {editNote, deleteNote} from '../actions/notes';

const EditNote = (props) => (
    <div>
        <p>{props.oneNote.createdAt}</p>
        <NoteForm 
            secondNote = {props.oneNote}

            onSubmit = {(note) => {
                props.dispatch(editNote(props.oneNote.id, note));
                props.history.push('/');      
                console.log('updates', note);          
            }}
            handleDelete = {(note) => {
                props.dispatch(deleteNote(props.oneNote.id));
                props.history.push('/');
            }}
            onModalClose = {() => {
                props.history.push('/');
            }}
            deleteOption = {true}
        />
        
        {console.log(props.oneNote)}
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        oneNote: state.notes.find((note) => {
            return note.id === props.match.params.id
        })
    }
}


export default connect(mapStateToProps)(EditNote);