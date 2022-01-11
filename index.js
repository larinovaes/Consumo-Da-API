import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import componenteHeader from './componenteHeader'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <componenteHeader/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
