import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
// import {SistemaVentas} from './SistemaVentas';
import { SistemaVentas } from './SistemaVentas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SistemaVentas />
  </React.StrictMode>
);


