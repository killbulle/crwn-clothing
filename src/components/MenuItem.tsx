import React, { FunctionComponent } from 'react';
import './menu_item.styles.scss';

interface OwnProps {
    title: string,
    imageUrl: string
    size?: string
}

type Props = OwnProps; // comprende pourquoi on passe d'un type a une interface

const MenuItem: FunctionComponent<Props> = (props: OwnProps) => (
  <div className={`${props.size ? props.size : ''} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${props.imageUrl}`,
      }}
    />

    <div
      className="content"
    >
      <h1
        className="title"
      >
        {' '}
        {props.title.toUpperCase()}
      </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
