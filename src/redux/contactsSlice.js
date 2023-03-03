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

  // Об'єкт редюсерів - функцій-інструкцій які отримують state і action та змінюють цей state
  reducers: {
    addContact(state, { payload }) { state.items = [...state.items, payload] },
    deleteContact(state, { payload }) { state.items = state.items.filter(item => item.id !== payload) },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
