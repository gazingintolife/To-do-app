const noteReducerDefaultState = [];

const noteReducer = (state = noteReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return [
                ...state,
                action.note
            ]
        case 'EDIT_NOTE':
                return state.map((note) => {
                    if(note.id === action.id){
                        return{
                            ...note,
                            ...action.updates
                        };
                    }
                    else {
                        return note;
                    }
                });
        case 'DELETE_NOTE':
                return state.filter((note) => note.id !== action.id);
        default:
            return state
    }
}

export default noteReducer;