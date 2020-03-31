import React, { FC } from 'react';
import { Item } from '../../pages/Item';
import './collection.item.style.scss';


type Props = Item;

const CollectionItem: FC<Props> = ({ name, price, imageUrl }: Item) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
