import { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContactOperation} from '../../redux/contacts/operations';

const ContactForm =()=> {
const [name, setName] = useState('');
const [number, setNumber] = useState('')


const dispatch = useDispatch()


 const handleChange = evt => {
    const { name, value } = evt.target;
    switch ( name){
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

        default:
          throw new Error();
    }
  };

 const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {name: name, number: number}
  // console.log(contact);
  
    dispatch(addContactOperation(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('')
  };

  
    return (
      <form  onSubmit={handleSubmit}>
        <h1 className={s.title}>Phonebook</h1>
       <div className={s.thumb}>
       <label className={s.label}>
          Name
          <input
            className={s.inp}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.inp}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

       </div>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
}



export default ContactForm;