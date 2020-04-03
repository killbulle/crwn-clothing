import { applyMiddleware, createStore } from 'redux';


import logger from 'redux-logger';
import rootReducer from './root-reduces';

const midldelwares = [logger];
const store = createStore(rootReducer, applyMiddleware(...midldelwares));
export default store;
