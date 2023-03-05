import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  // getFilteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <div>
            <span>{contact.name} : </span>
            <span>{contact.number}</span>
          </div>
          <button
            type="button"
            className={css.btnItem}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
