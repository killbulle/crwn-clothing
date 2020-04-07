import { CartCmd, CartState } from './types';
import { CART_ACTIONS } from './action';
import { Item } from '../../domain/Item';

export const initialState: CartState = {
  hidden: true,
  cartItems: new Map<Item, number>(),
};

function addCartItemsAndCount(originalitems: Map<Item, number>, item: Item): Map<Item, number> {
  const clone = new Map(originalitems);
  if (clone.has(item)) {
    clone.set(item, clone.get(item)! + 1);
  } else {
    clone.set(item, 1);
  }
  return clone;
}

export default function CartReducer(state = initialState, action: CartCmd): CartState {
  switch (action.type) {
    case CART_ACTIONS.TOGGLE:
      return {
        ...state,
        hidden: !action.payload,
      };
    case CART_ACTIONS.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItemsAndCount(state.cartItems, action.payload),
      };
    default:
      return state;
  }
}
