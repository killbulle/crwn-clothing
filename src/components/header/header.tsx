import React from 'react';
import './header.scss';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import { auth } from '../../datafire/firebase.util';
import { UserState } from '../../redux/User/User-types';
import { RootState } from '../../redux/root-reduces';


type Props = {
    currentUser: UserState;
}

// manque le type de dispatch
export function Header({ currentUser, history }: Props & RouteComponentProps & DispatchProp) {
  return (
    <div className="header">
      <Link className="logo-container" to="/" />
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
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.persist();
                console.log('cliked');

                const promise = auth.signOut();
                promise.then(() => {
                  console.log('signout');
                  history.push('/');
                }).catch((error) => {
                  console.log(error);
                });
              }}
            >
              SIGN OUT
            </div>
          )
          : <Link className="option" to="/signin">SIGNIN</Link>}
      </div>
    </div>
  );
}

const mapRootStateToProps = (state: RootState): Props => ({ currentUser: state.user });


export default connect(mapRootStateToProps)(withRouter(Header));
