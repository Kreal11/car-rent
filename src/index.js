import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/test-task-car-rent">
    <Provider store={store}>
      <App />
      <GlobalStyles />
      <ToastContainer autoClose={3000} theme="light" />
    </Provider>
  </BrowserRouter>
);
