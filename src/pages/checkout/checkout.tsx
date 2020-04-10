import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCarItems, selectCarItemsTotalPrice } from '../../redux/Cart/cartSelector.';
import { RootState } from '../../redux/root-reduces';
import { Item } from '../../redux/ShopData/Item';


import './_checkout.scss';
import Checkoutitem from '../../components/CheckoutItem/CheckoutItem';

type OwnProps = {
    cartItems: Map<Item, number>,
    total: number,
}


const Checkout = ({ cartItems, total }: OwnProps) => {
  const items: Item[] = Array.from(cartItems.keys());
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
                items.map((it) => <Checkoutitem key={it.id} item={it} quantity={cartItems.get(it)!} />)
            }

      <div className="total">
        <span>
          TOTAL:
          {total}
          $
        </span>
      </div>
    </div>
  );
};


const mapStateToProps = createStructuredSelector<RootState, OwnProps>({
  cartItems: selectCarItems,
  total: selectCarItemsTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
