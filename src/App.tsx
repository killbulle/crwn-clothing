import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Unsubscribe } from 'firebase';
import HomePage from './pages/homepage-component';
import HatPage from './pages/HatPage';
import ShopsPages from './pages/ShopsPages';
import Header from './components/header/header';
import { auth, createUserProfile, ExtraData } from './datafire/firebase.util';
import Signpage from './pages/SignPage/SignPage';


export type UserAuth =
    {
        id: string
        additionalData: ExtraData
    }

type Props = {}

type DocRef = firebase.firestore.DocumentReference;

class App extends React.Component<Props, UserAuth> {
    private unsubscribe: Unsubscribe;

    constructor(props: Props) {
      super(props);
      this.state = { id: '', additionalData: {} as ExtraData };
      this.unsubscribe = () => {
      };
    }


    componentDidMount(): void {
      this.unsubscribe = auth.onAuthStateChanged(async (user): Promise<void> => {
        if (user) {
          console.log('on change');
          const userRef: DocRef | void = await createUserProfile(user, {} as ExtraData);
          if (userRef instanceof firebase.firestore.DocumentReference) {
            userRef.onSnapshot((snapshot) => {
              this.setState({
                id: snapshot.id, ...snapshot.data(),
              }, () => console.log(this.state));
            });
          }
        } else {
          console.log('no user');
        }
      }, (error) => console.log(error));
    }

    componentWillUnmount(): void {
      this.unsubscribe();
    }

    render() {
      return (
        <div className="App">
          <Header currentUser={this.state} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopsPages} />
            <Route path="/signin" component={Signpage} />
          </Switch>
        </div>
      );
    }
}

export default App;
