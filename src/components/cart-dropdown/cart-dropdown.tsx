import React, { FC } from 'react';
import './_cart-dropdown.scss';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../CustomButton/CustomButton';
import { Item } from '../../redux/ShopData/Item';
import CartItemComponent from '../CarItemComponent/CarItemComponent';
import { RootState } from '../../redux/root-reduces';
import { createToogleCartCmd } from '../../redux/Cart/action';
import { selectCarItems } from '../../redux/Cart/cartSelector.';

interface Props {
    items: Map<Item, number>;
}

type OwnProps = Props & RouteComponentProps & DispatchProp;

const CartDropdown: FC<OwnProps> = ({ dispatch, history: { push }, items: map }: OwnProps) => {
  const itemMap = map;
  const items = Array.from(itemMap.keys());

  function displayMap() {
    return items.map((item) => <CartItemComponent key={item.id} item={item} quantity={itemMap.get(item)!} />);
  }


  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length === 0 ? <span>Your cart is empty</span> : displayMap()}
      </div>

      <CustomButton onClick={() => {
        push('/checkout');
        dispatch(createToogleCartCmd());
      }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};


const mapRootStateToProps = createStructuredSelector<RootState, Props>({ items: selectCarItems });

export default withRouter(connect(mapRootStateToProps)(CartDropdown));
