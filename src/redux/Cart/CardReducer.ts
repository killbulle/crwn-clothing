import { CART_ACTIONS, CartCmd, CartState } from './action';
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


function removeItem(originalitems: Map<Item, number>, item: Item): Map<Item, number> {
  console.log('removing item');
  const clone = new Map(originalitems);
  if (clone.has(item)) {
    clone.delete(item);
  }
  return clone;
}


function reduceQuantity(originalitems: Map<Item, number>, item: Item) {
  const clone = new Map(originalitems);
  if (clone.has(item)) {
    const quantity = clone.get(item)!;
    if (quantity > 1) {
      clone.set(item, quantity - 1);
    } else {
      clone.delete(item);
    }
  }
  return clone;
}

export default function CartReducer(state = initialState, action: CartCmd): CartState {
  switch (action.type) {
    case CART_ACTIONS.TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CART_ACTIONS.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItemsAndCount(state.cartItems, action.payload),
      };
    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case CART_ACTIONS.REDUCEQUANTITY:
      return {
        ...state,
        cartItems: reduceQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
}
