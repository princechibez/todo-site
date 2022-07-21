import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import uiReducer from './store/reducers/uiReducer';
import taskReducer from './store/reducers/taskReducer';

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';

const rootReducer = combineReducers({
  uiReducer: uiReducer,
  taskReducer: taskReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const app = (
 <Provider store={store}>
   <BrowserRouter>
  <App />
  </BrowserRouter>
 </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
