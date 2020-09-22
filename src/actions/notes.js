import database from '../firebase/firebase';

export const addNote = (
    {   
        id,
        title = '',
        createdAt = 0,
        category = ''
    } = {}) => ({
        type: 'ADD_NOTE',
        note: {
            id,
            title,
            createdAt,
            category
        }
    });

export const startAddNote = (notesData = {}) => {
    return (dispatch) => {
        const { title = '', createdAt = 0, category = ''} = notesData;  //destructuring
        const note = { title, createdAt, category};
        return database.ref('notes').push(note).then((ref) => {
            dispatch(addNote({
                id: ref.key,
                ...note
            }));
            console.log(ref.key);
        }) ;
    };
};

export const editNote = (id, updates) => ({
    type: 'EDIT_NOTE',
    id,
    updates
});

export const startEditNote = (id, updates) => {
    return (dispatch) => {
      database.ref(`notes/${id}`).update(updates).then(() => {
        dispatch(editNote(id, updates));
      });
    };
  };

export const deleteNote = ({id} = {}) => ({
    type: 'DELETE_NOTE',
    id
});

export const startDeleteNote = ({id} ={}) => {
    return (dispatch) => {
      return database.ref(`notes/${id}`).remove().then(() => {
          dispatch(deleteNote({id}));
      });
  };
}; 

export const setNotes  = (notes) => ({
    type: 'SET_NOTES',
    notes
  });
  
  export const startSetNotes = () => {
    return (dispatch) => {
      return database.ref('notes').once('value').then((snapshot) => {
        const notes = [];
  
        snapshot.forEach((childSnapshot) => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setNotes(notes));
      });
    };
  };
  
