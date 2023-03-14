import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
// import {SistemaVentas} from './SistemaVentas';
import { SistemaVentas } from './SistemaVentas';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SistemaVentas />
    </BrowserRouter>
  </React.StrictMode>
);


