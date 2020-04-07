import React from 'react';
import './collection.item.style.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Item } from '../../domain/Item';
import CustomButton from '../CustomButton/CustomButton';
import { createAddToCardCmd } from '../../redux/Cart/action';
import { AddToCardCmd } from '../../redux/Cart/types';


type Props = Item & DispatchProps;
export const CollectionItem = (props: Props) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${(props.imageUrl)})` }} />
    <div className="collection-footer">
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
    </div>
    <CustomButton
      inverted
      onClick={() => props.addToCart(props)}
    >
      ADD TO CART
    </CustomButton>
  </div>

);


interface DispatchProps {
    addToCart: (item: Item) => AddToCardCmd;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCart: (item: Item) => dispatch(createAddToCardCmd(item)),
} as DispatchProps


);
export default connect(null, mapDispatchToProps)(CollectionItem);
