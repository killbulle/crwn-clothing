import { combineReducers } from 'redux';
import UserReducer from './User/UserReducer';
import CartReducer from './Cart/CardReducer';
import DataShopReducer from './ShopData/shopdata-reducer';


const baseReducer = combineReducers({ shopdatas: DataShopReducer, user: UserReducer, cart: CartReducer });

const rootReducer = baseReducer;
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
