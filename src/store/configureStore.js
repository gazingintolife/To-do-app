import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notesReducer';
import filtersReducer from '../reducers/filtersReducer';

export default () => {
    const store = createStore(
        combineReducers({
            notes: notesReducer,
            filters: filtersReducer
        })
    );
    return store;
}