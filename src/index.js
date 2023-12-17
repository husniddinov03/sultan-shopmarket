import React from 'react';
import ReactDOM from 'react-dom/client';
// import './my-sass.scss';
import App from './App';
import { CoinProvider } from './Context/CoinContext';
import { BrowserRouter } from 'react-router-dom';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CoinProvider>
      <App />
    </CoinProvider>
  </BrowserRouter>
);

