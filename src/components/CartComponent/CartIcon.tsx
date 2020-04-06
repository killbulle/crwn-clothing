import React from 'react';
import './_CartIcon.scss';

import { connect } from 'react-redux';
// @ts-ignore
import { Dispatch } from 'redux';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { AddToCardCmdAction, CartState } from '../../redux/Cart/types';
import createCmdCart from '../../redux/Cart/action';


type DispatchProps = {
    setCartState: (cart: CartState) => AddToCardCmdAction;
}

type Props = {} & DispatchProps

const CartIcon = (props: Props) => (
  <div className="cart-icon" onClick={() => props.setCartState({ hidden: true })}>
    <Cart className="shopping-icon" />
    <span className="item-count">O</span>
  </div>
);


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCartState: (cart: CartState) => dispatch(createCmdCart(cart)),
});


export default connect(null, mapDispatchToProps)(CartIcon);
