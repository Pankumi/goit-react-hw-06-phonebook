// // npm install normalize.css
// // npm install react-router-dom
// // npm i styled-components
// // npm install @reduxjs/toolkit react-redux
// // npm i redux-persist

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import 'index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// 1 створ. сховише (redux/store.js)
// 2 зв'язуємо додаток з сховищєм - огортаємо App в Provider в який передаєм пропс store={store} (src/index.js) 
// 3 створ. слайс-обробник подій який змінює стейт (redux/contactsSlice.js)
// 4 підключаємо слайс до сховища. contactsReducer (redux/contactsSlice.js) в  reducer: (redux/store.js)
// 5 (components/ContactForm.jsx)
// 5.1 підписуємся на значення зі сховища const myConst = useSelector()
// useSelector( state => state.postData.post ) приймає колбек ф. з усім стейтом- правило за яким будем брать зн. зі сховища
// 5.2 імпортуємо "вантажівку-кур'єра" const dispatch = useDispatch();
// 5.3 створ. ф. якака при події буде виконувати dispatch(addContact({ name, number, id: nanoid() }));
