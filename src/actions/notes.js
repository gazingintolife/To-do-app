import uuid from 'uuid';

export const addNote = (
    {
        title = '',
        createdAt = 0,
        category = ''
    } = {}) => ({
        type: 'ADD_NOTE',
        note: {
            id: uuid(),
            title,
            createdAt,
            category
        }
    });

export const editNote = (id, updates, category) => ({
    type: 'EDIT_NOTE',
    id,
    updates,
    category
});

export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    id
});

