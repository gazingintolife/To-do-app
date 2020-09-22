import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import { startEditNote, startDeleteNote} from '../actions/notes';

const EditNote = (props) => (
    <div>
        <NoteForm 
            secondNote = {props.oneNote}
            onSubmit = { (note) => {
                props.startEditNote(props.oneNote.id, note);
                props.history.push('/');      
                console.log('updates', note);
                console.log(note);          
            } }
            handleDelete = { () => {
                props.startDeleteNote({ id: props.oneNote.id});
                props.history.push('/');
            } }
            onModalClose = {() => {
                props.history.push('/');
            }}
            deleteOption = {true}
        />
        
        {console.log(props.oneNote)}
    </div>
); 

const mapStateToProps = (state, props) => ({
    oneNote: state.notes.find((note) => {
        return note.id === props.match.params.id
    })
});

const mapDispatchToProps = (dispatch) => ({
    startEditNote: (id, note) => dispatch(startEditNote(id, note)),
    startDeleteNote: (data) => dispatch(startDeleteNote(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditNote);