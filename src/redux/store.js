import reducer from './reducer.js';
import reducer2 from './reducer2.js';
import { createStore, combineReducers } from 'redux';

const store = createStore( combineReducers({reducer, reducer2}) )

export default store;