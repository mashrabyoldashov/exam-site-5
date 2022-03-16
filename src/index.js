import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider as SavedProvider} from './Context/savedCardContext'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SavedProvider>
        <App />
      </SavedProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);