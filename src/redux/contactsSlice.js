import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',

  // Початковий стан редюсера слайсу
  initialState,

  // Об'єкт редюсерів - функцій-інструкцій які змінюють state. Отримують state і action та змінюють цей state
  reducers: {
    // модифікуєм state.items вкладаючи в ного масив в який розбираєм попередній ...state.items і нов. зн. payload
    addContact(state, action) {
      // console.log('action >>', action);
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, { payload }) {
      console.log('payload', payload);
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

// Генератор екшенів-інструкцій. В contactsSlice.actions автоматично генеруються інструкції з іменами ідентичними reducers
// Інструкція об'єкт має поле тип і може мати поле пейлоад
// інструкції addContact, deleteContact (кожна з яких опрацьовується в своєму кабінеті вищє)
export const { addContact, deleteContact } = contactsSlice.actions;

// Налаштований редюсер слайсу який опрацьовує інструкції addContact, deleteContact (підрозділ який має багато кабінетів)
export const contactsReducer = contactsSlice.reducer;
