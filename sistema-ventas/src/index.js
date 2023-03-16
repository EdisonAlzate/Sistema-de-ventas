import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Provider } from 'react-redux'
// import {SistemaVentas} from './SistemaVentas';
import { SistemaVentas } from './SistemaVentas';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SistemaVentas />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


