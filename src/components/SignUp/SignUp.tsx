import React from 'react';
import Forminput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfile } from '../../datafire/firebase.util';

import './SignUp.scss';

interface OwnProps {}

interface SignUpState {
  displayname: string;
  password: string;
  confirmPasword: string;
  email: string;
}

type Props = OwnProps;

class SignUp extends React.Component<Props, SignUpState> {
  private initialState: SignUpState = {
    displayname: '',
    password: '',
    email: '',
    confirmPasword: '',
  };

  constructor(props: Props) {
    super(props);

    this.state = this.initialState;
  }

  private onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.persist();
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      } as Pick<SignUpState, keyof SignUpState>,
      () => console.log(this.state)
    );
  };

  private submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submited');
    const { confirmPasword, password, displayname, email } = this.state;

    if (confirmPasword !== password) {
      alert("password and confirm password don't match");
      return;
    }

    try {
      const userCredential: firebase.auth.UserCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(userCredential.user, {
        displayName: displayname,
      });
      this.setState(this.initialState);
    } catch (error) {
      console.log(error);
    }
  };

  render(): React.ReactNode {
    const { displayname, email, password, confirmPasword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submit}>
          <Forminput
            type="text"
            name="displayname"
            label="Displayname"
            value={displayname}
            required
            onChange={this.onchange}
          />
          <Forminput
            type="email"
            name="email"
            label="email"
            value={email}
            required
            onChange={this.onchange}
          />
          <Forminput
            type="password"
            name="password"
            label="password"
            value={password}
            required
            onChange={this.onchange}
          />
          <Forminput
            type="password"
            name="confirmPasword"
            label="confirm"
            value={confirmPasword}
            required
            onChange={this.onchange}
          />
          <CustomButton type="submit">Sign UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
