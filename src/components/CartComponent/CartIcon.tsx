import React from 'react';
import './_CartIcon.scss';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { createToogleCartCmd, ToggleCardCmd } from '../../redux/Cart/action';
import { RootState } from '../../redux/root-reduces';
import { selectCarItemsCount } from '../../redux/Cart/cartSelector.';
import { ReactComponent as Cart } from '../../assets/cart.svg';


type DispatchProps = {
    setCartState: () => ToggleCardCmd;
}
type OwnProps = {
    elementsCount: number
}


type Props = {} & DispatchProps & OwnProps

const CartIcon = ({ elementsCount, setCartState }: Props) => (
  <div className="cart-icon" onClick={() => setCartState()}>
    <Cart className="shopping-icon" />
    <span className="item-count">
      {elementsCount}
    </span>
  </div>
);

const mapRootStateToProps = createStructuredSelector<RootState, OwnProps>({ elementsCount: selectCarItemsCount });


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCartState: () => dispatch(createToogleCartCmd()),
});


export default connect(mapRootStateToProps, mapDispatchToProps)(CartIcon);
