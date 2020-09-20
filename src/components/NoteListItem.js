import React from 'react';
import { NavLink } from 'react-router-dom';

const NoteListItem = (note) => (
    <div>   
        <p><NavLink to = {`/edit/${note.id}`}>{note.title}</NavLink></p>
        <p> {note.createdAt}</p>
    </div>
);

export default NoteListItem;