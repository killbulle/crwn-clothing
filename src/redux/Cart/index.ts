import { CartActions, CartState } from './types';
import { CART_ACTIONS } from './action';

export const initialState: CartState = {
  hidden: true,
};

export default function CartReducer(state = initialState, action: CartActions): CartState {
  switch (action.type) {
    case CART_ACTIONS.TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
}
