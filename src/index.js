import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './util/redux/store'
import { HashRouter } from 'react-router-dom';

import { Provider as ReduxProvider } from "react-redux";
const store = configureStore()
ReactDOM.render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </ReduxProvider>
  ,
  // </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
