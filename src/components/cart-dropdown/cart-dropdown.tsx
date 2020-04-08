import React from 'react';
import './_cart-dropdown.scss';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../CustomButton/CustomButton';
import { Item } from '../../domain/Item';
import CartItemComponent from '../CarItemComponent/CarItemComponent';
import { RootState } from '../../redux/root-reduces';
import { createToogleCartCmd } from '../../redux/Cart/action';
import { selectCarItems } from '../../redux/Cart/cartSelector.';

interface Props {
    items: Map<Item, number>;
}


const CartDropdown = (props: Props & RouteComponentProps & DispatchProp) => {
  const items = Array.from(props.items.keys());
  const { push } = props.history;

  function displayMap() {
    return items.map((item) => (
      <CartItemComponent
        key={item.id}
        item={item}
        quantity={props.items.get(item)!}
      />
    ));
  }


  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length === 0 ? (<span>Your cart is empty</span>) : displayMap()}
      </div>

      <CustomButton onClick={() => {
        push('/checkout');
        props.dispatch(createToogleCartCmd(true));
      }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};


const mapRootStateToProps = createStructuredSelector<RootState, Props>({ items: selectCarItems });

export default withRouter(connect(mapRootStateToProps)(CartDropdown));
