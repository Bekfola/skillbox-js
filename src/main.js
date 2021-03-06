import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './reducers/store';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  ,
  document.getElementById('app')
);


