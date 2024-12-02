import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './context/Appcontext';  // Correct import
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);