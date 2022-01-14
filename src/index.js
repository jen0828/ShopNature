import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let initialState = [{ id: 0, name: 'Organic Cream', qty: 2 }];

function reducer(state = initialState, action) {
  if (action.type === 'Qty increase') {

    let copy = [...state];
    copy[0].qty++;
    return copy

  } else if (action.type === 'Qty decrease') {

    let copy = [...state];
    copy[0].qty--;
    return copy

  } else {
    return state
  }
}
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
