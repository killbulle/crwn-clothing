import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root-reduces';
import { CartState } from './Cart/action';
import { Item } from './ShopData/Item';
import { initialUserState } from './User/UserReducer';
import { initialCartState } from './Cart/CardReducer';

function mapToJson(map: Map<Item, number>) {
  return JSON.stringify([...map]);
}

function jsonToMap(jsonStr: string): Map<Item, number> {
  return new Map(JSON.parse(jsonStr));
}

const CART = 'carts';

function savelocalStorage(cartState: CartState) {
  try {
    const seria = mapToJson(cartState.cartItems);
    localStorage.setItem(CART, seria);
  } catch (e) {
    console.log(e);
  }
}

function readFromLocalStorage(): CartState {
  try {
    const seria = localStorage.getItem(CART);
    return { hidden: true, cartItems: jsonToMap(seria!) };
  } catch (e) {
    console.log(e);
    return initialCartState;
  }
}

const preload = readFromLocalStorage();

const midldelwares = [logger];

if (process.env.NODE_ENV === 'development') {
  midldelwares.push(logger);
}

midldelwares.push(thunk);

const store = createStore(
  rootReducer,
  {
    user: initialUserState,
    cart: preload,
  },
  composeWithDevTools(applyMiddleware(...midldelwares))
);
export default store;

store.subscribe(() => savelocalStorage(store.getState().cart));
// @ts-ignore
