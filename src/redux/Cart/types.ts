import { Action } from 'redux';
import { CART_ACTIONS } from './action';
import { Item } from '../../domain/Item';

export interface CartState {
    hidden: boolean,
    cartItems: Map<Item, number>
}

export type ToggleCardCmd = Action<CART_ACTIONS.TOGGLE> & { payload: boolean }
export type AddToCardCmd = Action<CART_ACTIONS.ADD_ITEM> & { payload: Item }

export type CartCmd = ToggleCardCmd & AddToCardCmd;
