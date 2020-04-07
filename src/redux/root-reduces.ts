import { combineReducers } from 'redux';
import UserReducer from './User/UserReducer';
import CartReducer from './Cart/CardReducer';


const rootReducer = combineReducers({ user: UserReducer, cart: CartReducer });

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
