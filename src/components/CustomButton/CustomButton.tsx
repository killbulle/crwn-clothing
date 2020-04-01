// @flow
import React from 'react';


import './CustomButton.scss';


interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    googlesign?: true
}

type Props = {};
export const CustomButton = ({ googlesign, children, ...props }: IProps) => (
  <button
    type="button"
    className={`${googlesign ? 'google-sign-in' : ''} custom-button`}
    {...props}
  >
    {children}
  </button>
);


export default CustomButton;
