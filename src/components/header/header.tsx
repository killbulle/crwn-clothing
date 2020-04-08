import React from 'react';
import './header.scss';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../datafire/firebase.util';
import { UserState } from '../../redux/User/User-types';
import { RootState } from '../../redux/root-reduces';
// @ts-ignore
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartComponent from '../CartComponent/CartIcon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectUser } from '../../redux/User/UserSelector';
import { selectCarHidden } from '../../redux/Cart/cartSelector.';


type Props = {
    currentUser: UserState,
    hidden: boolean,
}

// manque le type de dispatch
export function Header({ hidden, currentUser, history }: Props & RouteComponentProps & DispatchProp) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser.id.length !== 0
          ? (
            <div
              className="option"
              onClick={async (e: React.MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.persist();
                console.log('cliked');
                await auth.signOut();
                history.push('/');
              }}
            >
              SIGN OUT
            </div>
          )
          : <Link className="option" to="/signin">SIGNIN</Link>}
        <CartComponent />
      </div>
      {hidden ? <CartDropdown /> : ''}
    </div>
  );
}

const mapStateToProps = createStructuredSelector<RootState, Props>({ currentUser: selectUser, hidden: selectCarHidden });


export default connect(mapStateToProps)(withRouter(Header));
