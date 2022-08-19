
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getContactOperation } from 'redux/contacts/operations';

const  App = () => {

  const dispatch = useDispatch()


  useEffect(()=> {
    dispatch(getContactOperation())
  }, [dispatch])




    return (
      <div className="div">
        <ContactForm />
        <h2 className="contactsTitle">Contacts</h2>
         <ContactList />
         <Filter />
      </div>
    );
  
};

export default App;
