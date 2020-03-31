import React, { FunctionComponent } from 'react';
import './homepage.style.scss';
import Directory from '../components/Directory/Directory';

export const HomePage: FunctionComponent = () => (
  <div className="homepage">
    <Directory />
  </div>
);


export default HomePage;
