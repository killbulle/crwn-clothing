import React from 'react';
import './collection.item.style.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Item } from '../../redux/ShopData/Item';
import CustomButton from '../CustomButton/CustomButton';
import { AddToCardCmd, createAddToCardCmd } from '../../redux/Cart/action';


type Props = DispatchProps & Item;
const CollectionItem: React.FC<Props> = (props: Props) => {
  const {
    imageUrl, addToCart, price, name,
  } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addToCart(props);
        }}
      >
        ADD TO CART
      </CustomButton>
    </div>

  );
};


interface DispatchProps {
    addToCart: (item: Item) => AddToCardCmd;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addToCart: (item: Item) => dispatch(createAddToCardCmd(item)),
} as DispatchProps


);
//FIX ME template
export default connect(null, mapDispatchToProps)(CollectionItem);
