import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>hello</h1>
    {console.log("hello")}
   <App />
  </React.StrictMode>
);

