import App from './App';
import ReactDOM from "react-dom";
import React from 'react';
import store from './Redux/Store/store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


