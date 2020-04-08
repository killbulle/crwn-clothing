import React from 'react';
import './CheckoutItem.scss';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Item } from '../../domain/Item';
import {
  CART_ACTIONS, createAddToCardCmd, createDecreateQuantityCmd, removeToCardCmd,
} from '../../redux/Cart/action';


type Props = {
    item: Item
    quantity: number
}

interface DispatchProps {
    remove: (item: Item) => Action<CART_ACTIONS.REMOVE_ITEM> & { payload: Item };
    reduce: (item: Item) => Action<CART_ACTIONS.REDUCEQUANTITY> & { payload: Item };
    add: (item: Item) => Action<CART_ACTIONS.ADD_ITEM> & { payload: Item };
}


const Checkoutitem = ({
  item: { imageUrl, name, price }, quantity, item, remove, reduce, add,
}: Props & DispatchProps) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="decrease" onClick={() => reduce(item)}>{'<'}</span>
    <span className="quantity">
      {quantity}
      {' '}
    </span>
    <span className="increase" onClick={() => add(item)}>
      {' '}
      {'>'}
    </span>
    <span className="price">
      {' '}
      {price}
      {' '}
    </span>
    <div
      className="remove-button"
      onClick={(event) => {
        remove(item);
        alert('click');
      }}
    >
      &#10005;
    </div>

  </div>
);


const mapDispatchToProps = (dispatch: Dispatch) => ({
  remove: (item: Item) => dispatch((removeToCardCmd(item))),
  reduce: (item: Item) => dispatch((createDecreateQuantityCmd(item))),
  add: (item: Item) => dispatch((createAddToCardCmd(item))),

});


export default connect(null, mapDispatchToProps)(Checkoutitem);
