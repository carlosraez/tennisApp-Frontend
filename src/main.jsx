import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
