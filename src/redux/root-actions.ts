import { UserActionTypes } from './User/action';
import { ShopAction } from './ShopData/shopdata-action';
import { CartCmd } from './Cart/action';

export type AppActions = UserActionTypes & ShopAction & CartCmd;
