import {getSearchingContacts} from './actions';
import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {getContactOperation, addContactOperation, deleteContactOperation} from './operations';


const items = createReducer([], {
    [addContactOperation.fulfilled]: (state, {payload}) =>  [...state, payload ],
    [deleteContactOperation.fulfilled]: (state, {payload}) => [...state.filter(({ id }) => id !== payload)],
    [getContactOperation.fulfilled]: (_, {payload}) => payload
})

const filter = createReducer('', {
    [getSearchingContacts]: (_, {payload}) => payload
})

const loading = createReducer(false, {
    [getContactOperation.pending]: ()=> true,
    [getContactOperation.fulfilled]: ()=> false,
    [getContactOperation.rejected]: ()=> false,


    [addContactOperation.pending]: ()=> true,
    [addContactOperation.fulfilled]: ()=> false,
    [addContactOperation.rejected]: ()=> false,

    [deleteContactOperation.pending]: ()=> true,
    [deleteContactOperation.fulfilled]: ()=> false,
    [deleteContactOperation.rejected]: ()=> false,
})

const setError = (_, { payload }) => payload;

const error = createReducer(null, {

    [getContactOperation.pending]: ()=> null,
    [getContactOperation.rejected]: setError,

    [addContactOperation.pending]: ()=> null,
    [addContactOperation.rejected]: setError,

    [deleteContactOperation.pending]: ()=> null,
    [deleteContactOperation.rejected]: setError,
})

const reduser = combineReducers({items, filter, loading, error})


export default reduser