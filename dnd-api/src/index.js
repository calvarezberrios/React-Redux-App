import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { fetchReducer } from "./reducers";
import App from './App';

const store = createStore(fetchReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store = {store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);