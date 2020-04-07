import React from 'react';
import { Item } from '../../domain/Item';

import './_CarItemComponent.scss';

type Props = {
    quantity: number,
    item: Item,
}


const CartItemCompnoent = ({ item: { imageUrl, name, price }, quantity }: Props) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <div className="name">{name}</div>
      <div className="price">{`${quantity} X ${price}$`}</div>
    </div>
  </div>

);

export default CartItemCompnoent;
