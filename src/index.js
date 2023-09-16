import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Searchbar from './searchbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Searchbar />
  </React.StrictMode>,
);
