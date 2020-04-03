import React from 'react';
import './SignPage.scss';
import Signin from '../../components/signin/signin';
import SignUp from '../../components/SignUp/SignUp';


const Signpage = () => (
  <div className="sign-in-and-sign-up ">
    <Signin />
    <SignUp />
  </div>
);

export default Signpage;
