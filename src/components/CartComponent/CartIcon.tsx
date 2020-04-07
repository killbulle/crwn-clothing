import React from 'react';
import './_CartIcon.scss';

import { connect } from 'react-redux';
// @ts-ignore
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { Dispatch } from 'redux';


import { CartState, ToggleCardCmd } from '../../redux/Cart/types';
import { createToogleCartCmd } from '../../redux/Cart/action';


type DispatchProps = {
    setCartState: (cart: CartState) => ToggleCardCmd;
}

type Props = {} & DispatchProps

const CartIcon = (props: Props) => (
  <div className="cart-icon" onClick={() => props.setCartState({ hidden: true, cartItems: [] })}>
    <Cart className="shopping-icon" />
    <span className="item-count">O</span>
  </div>
);


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCartState: (cart: CartState) => dispatch(createToogleCartCmd(cart.hidden)),
});


export default connect(null, mapDispatchToProps)(CartIcon);
