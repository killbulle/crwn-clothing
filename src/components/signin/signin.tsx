import React from 'react';
import './signin.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWhithGoogle } from '../../datafire/firebase.util';

type Props = {};
type Ident = {
  email: string;
  password: string;
};
export default class Signin extends React.Component<Props, Ident> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.persist();
    const { value } = e.target;

    this.setState({ email: value });
  };

  handleChangePass = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.persist();
    const { value } = e.target;

    this.setState({ password: value });
  };

  render() {
    const { password, email } = this.state;
    return (
      <div className="signin">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            onChange={this.handleChangeMail}
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            onChange={this.handleChangePass}
            label="password"
          />
          <CustomButton type="submit" value="submit">
            Sign In with
          </CustomButton>
          <CustomButton
            googlesign
            type="submit"
            value="submit"
            onClick={signInWhithGoogle}
          >
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
