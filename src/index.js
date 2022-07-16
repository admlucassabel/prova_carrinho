import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SelectCart from './Initializer/SelectCart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectCart />
  </React.StrictMode>
);

reportWebVitals();
