import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Unsubscribe } from 'firebase';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage-component';
import ShopsPages from './pages/shop/ShopsPages';
import Header from './components/header/header';
import { auth, createUserProfile } from './datafire/firebase.util';
import Signpage from './pages/SignPage/SignPage';
import { ExtraData, UserState } from './redux/User/User-types';
import { createCurrentUserCmd, SetUserAction } from './redux/User/action';
import { RootState } from './redux/root-reduces';
import { selectUser } from './redux/User/UserSelector';
import Checkout from './pages/checkout/checkout';

type DispatchProps = {
  setCurrentUser: (user: UserState) => SetUserAction;
};

type OwnProps = {
  currentUser: UserState;
};

type Props = DispatchProps & OwnProps;
type DocRef = firebase.firestore.DocumentReference;

class App extends React.Component<Props, UserState> {
  private unsubscribe: Unsubscribe;

  constructor(props: Props) {
    super(props);
    this.unsubscribe = () => {};
  }

  componentDidMount(): void {
    console.log('Mounting');

    this.unsubscribe = auth.onAuthStateChanged(
      async (user): Promise<void> => {
        const { setCurrentUser } = this.props;
        if (user) {
          console.log('on change');
          const userRef: DocRef | void = await createUserProfile(
            user,
            {} as ExtraData
          );
          if (userRef instanceof firebase.firestore.DocumentReference) {
            userRef.onSnapshot((snapshot) => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data(),
              } as UserState);
            });
          }
        } else {
          console.log('no user');
        }
      },
      (error) => console.log(error)
    );
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  render() {
    const { currentUser } = this.props;
    console.log(`user${JSON.stringify(currentUser)}`);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopsPages} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            excat
            path="/signin"
            render={() =>
              currentUser.id.length !== 0 ? <Redirect to="/" /> : <Signpage />}
          />
        </Switch>
      </div>
    );
  }
}

const mapRootStateToProps = createStructuredSelector<RootState, OwnProps>({
  currentUser: selectUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: UserState) => dispatch(createCurrentUserCmd(user)),
});

export default connect(mapRootStateToProps, mapDispatchToProps)(App);
