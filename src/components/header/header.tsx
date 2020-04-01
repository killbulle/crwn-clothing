import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserLogged } from '../../App';
import { auth } from '../../firebase/firebase.util';

type Props = {
    currentUser: UserLogged;
}

export const Header = ({ currentUser }: Props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser
        ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        )
        : <Link className="option" to="/sigin" />}
    </div>
  </div>
);
export default Header;
