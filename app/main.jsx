'use strict';

import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Dashboard from './containers/Dashboard/Dashboard';
//import reducers from './redux/reducers';

//const logger = createLogger();
//const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);

ReactDOM.render(
  <Dashboard />,
  document.querySelector('#app-root')
);


/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Dashboard />
  </Provider>
  ,
  document.querySelector('#app-root')
);
*/
