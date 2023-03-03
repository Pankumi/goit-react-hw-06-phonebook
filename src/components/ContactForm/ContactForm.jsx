import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
      return;
    }

    if (name === 'number') {
      setNumber(value);
      return;
    }
  };

  const onAddContact = event => {
    event.preventDefault();
    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      alert(`${name} is already in contacts!`);
      formReset();
      return;
    }
  
    dispatch(addContact({ name, number, id: nanoid() }));

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    
    <form className={css.form} onSubmit={onAddContact}>
      <label>Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleInputChange}
        autoFocus="on"
      />
      <label>Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleInputChange}
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
