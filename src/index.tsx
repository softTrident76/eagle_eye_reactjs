import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import BaseRouter from 'routes/BaseRouter';
import { Provider } from "react-redux";
import { store } from 'store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BaseRouter />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
