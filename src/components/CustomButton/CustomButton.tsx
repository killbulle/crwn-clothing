/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from 'react';

import './CustomButton.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  googlesign?: true;
  inverted?: true;
}

export const CustomButton = ({
  inverted,
  googlesign,
  children,
  ...props
}: IProps) => (
  <button
    type="button"
    className={`${inverted ? 'inverted' : ''}  ${
      googlesign ? 'google-sign-in' : ''
    } custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
