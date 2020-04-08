import React from 'react';
import './_CartIcon.scss';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { ReactComponent as Cart } from '../../assets/cart.svg';


import { ToggleCardCmd } from '../../redux/Cart/types';
import { createToogleCartCmd } from '../../redux/Cart/action';
import { RootState } from '../../redux/root-reduces';
import { selectCarItemsCount } from '../../redux/Cart/cartSelector.';


type DispatchProps = {
    setCartState: (hidden: boolean) => ToggleCardCmd;
}
type OwnProps = {
    elementsCount: number
}


type Props = {} & DispatchProps & OwnProps

const CartIcon = ({ elementsCount, setCartState }: Props) => (
  <div className="cart-icon" onClick={() => setCartState(true)}>
    <Cart className="shopping-icon" />
    <span className="item-count">
      {elementsCount}
    </span>
  </div>
);

const mapRootStateToProps = createStructuredSelector<RootState, OwnProps>({ elementsCount: selectCarItemsCount });


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCartState: (hidden: boolean) => dispatch(createToogleCartCmd(hidden)),
});


export default connect(mapRootStateToProps, mapDispatchToProps)(CartIcon);
