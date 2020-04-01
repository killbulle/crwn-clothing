import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Unsubscribe } from 'firebase';
import HomePage from './pages/homepage-component';
import HatPage from './pages/HatPage';
import ShopsPages from './pages/ShopsPages';
import Header from './components/header/header';
import Signin from './components/signin/signin';
import { auth } from './firebase/firebase.util';

export type UserLogged = firebase.User | null;


type Props = {}

class App extends React.Component<Props, UserLogged> {
    private unsubscribe: Unsubscribe;

    constructor(props: Props) {
      super(props);
      this.state = null;
      this.unsubscribe = () => {
      };
    }


    componentDidMount(): void {
      this.unsubscribe = auth.onAuthStateChanged((user: firebase.User | null) => {
        this.setState(user);
        console.log(user);
      }, (error) => console.log(error));
    }

    componentWillUnmount(): void {
      this.unsubscribe();
    }

    render() {
      return (
        <div className="App">
          <Header currentUser={this.state} />
          <Signin />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopsPages} />
            <Route path="/shop/hats" component={HatPage} />
          </Switch>
        </div>
      );
    }
}

export default App;
