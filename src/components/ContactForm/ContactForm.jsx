import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  // підписуємся на стейт useSelector( state => state.contacts.items; )
  const contacts = useSelector(getContacts);

  // імпортуємо "вантажівку-кур'єра"
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // зберігаєм ввод поля в стейт компонента
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

  // зберігаєм сабміт форми в стейт додатка
  const onAddContact = event => {
    event.preventDefault();

    // перевірка на введення імені яке вже є в масиві контактів
    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      alert(`${name} is already in contacts!`);
      formReset();
      return;
    }

    // відправляєм "вантажівку-кур'єра" з інструкцією (поля тип-назва кабінету, необовьязкове поле пейлоад-новий стейт)
    dispatch(addContact({ name, number, id: nanoid() }));
    // теж-сае: dispatch({ type: "contacts/addContact", payload: { name, number, id: nanoid() } });

    formReset();
  };

  // очищєння форми
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
