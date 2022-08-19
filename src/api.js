import axios from 'axios';

axios.defaults.baseURL = 'https://62fe1c74a85c52ee482ff57f.mockapi.io/'

export const getContact = async () => {
    const response = await axios.get('/contacts')
    return response.data
}

export const addContact = async (contact) => {
    const response = await axios.post('/contacts' , contact);
    return response.data
}


export const deleteContact = async (id) => {
    await axios.delete(`/contacts/${id}`)
    return id
}



