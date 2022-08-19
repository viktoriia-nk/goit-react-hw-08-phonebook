import { createAsyncThunk } from '@reduxjs/toolkit';


import {getContact, addContact, deleteContact} from '../../api';

export const getContactOperation = createAsyncThunk(
    'getContact',
    async (_, {rejectWithValue})=> {
        try{
            const gettingContacts = await getContact()
            return gettingContacts
        }
        catch(error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addContactOperation = createAsyncThunk(
    'addContact',
    async (contact, {rejectWithValue})=> {
        try{
            const addedContact = await addContact(contact)
            return addedContact
        }
        catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const deleteContactOperation = createAsyncThunk(
    'deleteContact',
    async (id, {rejectWithValue})=> {
        try{
            await deleteContact(id)
            return id
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)