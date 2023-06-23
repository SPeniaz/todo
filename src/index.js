import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/pages/ToDoPage';
import store from './redux/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
