import { AddToCardCmdAction, CartState } from './types';

export enum CART_ACTIONS {
    TOGGLE = 'Cart/SET_DATA',
}

const createCmdCart = (cart: CartState): AddToCardCmdAction => ({ type: CART_ACTIONS.TOGGLE, payload: cart });

export default createCmdCart;
