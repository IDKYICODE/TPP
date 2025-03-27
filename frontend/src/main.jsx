import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>

  </BrowserRouter>
);