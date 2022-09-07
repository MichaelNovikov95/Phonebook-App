import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// 1. В АПП написать навбар и добавить маршруты - навигации, ауснав, юзернав
// 2. Добавить view главной страницы, регистрации и входа в акк
// 3. Добавить в стор доп.слайсер/редюсер для authregistr.
// 4. В папку редакс доболнить аусредюсер папку и написать туда стандартные файлы. в котором будет одни слайс
// 1. В АПП написать навбар и добавить маршруты - навигации, ауснав, юзернав
