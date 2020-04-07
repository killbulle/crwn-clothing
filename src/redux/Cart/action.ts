import { AddToCardCmd, ToggleCardCmd } from './types';
import { Item } from '../../domain/Item';


export enum CART_ACTIONS {
    TOGGLE = 'Cart/SET_DATA',
    ADD_ITEM = 'Cart/ADD_ITEM'
}

export const createToogleCartCmd = (hidden: boolean): ToggleCardCmd => ({
  type: CART_ACTIONS.TOGGLE,
  payload: hidden,
});
export const createAddToCardCmd = (item: Item): AddToCardCmd => ({ type: CART_ACTIONS.ADD_ITEM, payload: item });
