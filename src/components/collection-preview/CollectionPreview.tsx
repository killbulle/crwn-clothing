import React from 'react';
import './collection-preview.style.scss';
import { Item } from '../../redux/ShopData/Item';
import CollectionItem from '../collection-item/CollectionItem';
import {Category} from '../../redux/ShopData/shopdata-action';

interface OwnProps {
    readonly shopData: Readonly<Category>;
}


const CollectionPreview = ({ shopData }: OwnProps) => (
  <div className="collection-preview">
    <h1 className="title">{shopData.title}</h1>
    <div className="preview">
      {shopData.items.filter((_item, idx) => idx < 4)
        .map((item: Item) => (
          <CollectionItem
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
