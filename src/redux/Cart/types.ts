import { Action } from 'redux';
import { CART_ACTIONS } from './action';

export interface CartState {
    hidden: boolean
}

export type AddToCardCmdAction = Action<CART_ACTIONS.TOGGLE> & { payload: CartState }

export type CartActions = AddToCardCmdAction;
