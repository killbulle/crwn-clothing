import { createSelector } from 'reselect';
import { RootState } from '../root-reduces';
import { CartState } from './types';
import { Item } from '../../domain/Item';


export const selectCart = (state: RootState) => state.cart;
export const selectCarHidden = createSelector([selectCart], ((cart: CartState) => cart.hidden));
export const selectCarItems = createSelector([selectCart], ((cart: CartState) => cart.cartItems));
export const selectCarItemsCount = createSelector([selectCarItems], (items: Map<Item, number>) => {
  const numbers = Array.from(items.values());
  const elementsCount = numbers.reduce((a, b) => a + b, 0);
  return elementsCount;
});
export const selectCarItemsTotalPrice = createSelector([selectCarItems], (cartItems: Map<Item, number>) => {
  const items: Item[] = Array.from(cartItems.keys());
  const total = items.map((it) => it.price * cartItems.get(it)!).reduce((a, b) => a + b, 0);
  return total;
});
