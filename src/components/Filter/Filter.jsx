import { useDispatch, useSelector } from 'react-redux';
import {getSearchingContacts} from '../../redux/contacts/actions';
import s from './Filter.module.css';

const Filter = () => {

  const dicpatch = useDispatch();
  const filter = useSelector(state=> state.contacts.filter)

  const handleFilter = (e)=> {
    dicpatch(getSearchingContacts(e.target.value))
  }

  return (
    <label className={s.find}>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};



export default Filter;