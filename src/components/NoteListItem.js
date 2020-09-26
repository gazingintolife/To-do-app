import React from 'react';
import { NavLink } from 'react-router-dom';

const NoteListItem = (note) => (
    <div className="note__items button">   
        <p><NavLink  className="note" to = {`/edit/${note.id}`}>{note.title}</NavLink></p>
        <p> {note.createdAt}</p>
    </div>
    
);

export default NoteListItem;