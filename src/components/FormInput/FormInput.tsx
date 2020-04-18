/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './FormInput.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string; // override to be defined !
}

export const Forminput = ({ onChange, label, value, ...props }: Props) => (
  <div className="group">
    <input id="input" className="form-input" onChange={onChange} {...props} />
    {label ? (
      <label
        htmlFor="input"
        className={`${value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default Forminput;
