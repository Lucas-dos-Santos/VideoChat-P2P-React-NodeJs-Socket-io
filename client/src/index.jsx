import React from 'react';
import ReactDOM from 'react-dom/client';
import { SocketContextProvider } from './contexts/socketContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketContextProvider>
    <App />
  </SocketContextProvider>,
);
