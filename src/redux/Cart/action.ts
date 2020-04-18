import { Action } from 'redux';
import { Item } from '../ShopData/Item';

export interface CartState {
  hidden: boolean;
  cartItems: Map<Item, number>;
}

export enum CART_ACTIONS {
  REDUCEQUANTITY = 'Cart/REDUCE',
  REMOVE_ITEM = 'Cart/REMOVE_ITEM',
  TOGGLE = 'Cart/SET_DATA',
  ADD_ITEM = 'Cart/ADD_ITEM',
}

export type ToggleCardCmd = Action<CART_ACTIONS.TOGGLE> & {};
export type AddToCardCmd = Action<CART_ACTIONS.ADD_ITEM> & { payload: Item };
export type RemoveToCardCmd = Action<CART_ACTIONS.REMOVE_ITEM> & {
  payload: Item;
};
export type DecreateQuantityCmd = Action<CART_ACTIONS.REDUCEQUANTITY> & {
  payload: Item;
};
export type CartCmd = ToggleCardCmd &
  AddToCardCmd &
  RemoveToCardCmd &
  DecreateQuantityCmd;

export const createToogleCartCmd = (): ToggleCardCmd => ({
  type: CART_ACTIONS.TOGGLE,
});
export const createDecreateQuantityCmd = (item: Item): DecreateQuantityCmd => ({
  type: CART_ACTIONS.REDUCEQUANTITY,
  payload: item,
});
export const createAddToCardCmd = (item: Item): AddToCardCmd => ({
  type: CART_ACTIONS.ADD_ITEM,
  payload: item,
});

export const removeToCardCmd = (item: Item): RemoveToCardCmd => {
  console.log('dispached');
  return { type: CART_ACTIONS.REMOVE_ITEM, payload: item };
};
