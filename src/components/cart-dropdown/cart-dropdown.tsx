import React, { FunctionComponent } from 'react';
import './_cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import {RootState} from "../../redux/root-reduces";


interface OwnProps {

}

type Props = OwnProps;

const CartDropdown: FunctionComponent<Props> = (props) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);




export default CartDropdown;
