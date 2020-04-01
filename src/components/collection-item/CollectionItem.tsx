import React from 'react';
import './collection.item.style.scss';
import { Item } from '../../pages/Item';


type Props = Item;

export const CollectionItem = ({ name, price, imageUrl }: Item) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
