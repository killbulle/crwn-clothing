import React from 'react';
import './_cart-dropdown.scss';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import { RootState } from '../../redux/root-reduces';
import { Item } from '../../domain/Item';
import CartItemCompnoent from '../CarItemComponent/CarItemComponent';

interface Props {
    items: Map<Item, number>;
}


const CartDropdown = (props: Props) => {
  const items = Array.from(props.items.keys());
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItemCompnoent
            key={item.id}
            item={item}
            quantity={props.items.get(item)!}
          />
        ))}

      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};


const mapRootStateToProps = (state: RootState): Props => ({ items: state.cart.cartItems } as Props);

export default connect(mapRootStateToProps, null)(CartDropdown);
