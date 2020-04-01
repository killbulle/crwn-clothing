import React, { FunctionComponent } from 'react';
import './menu_item.styles.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';


interface OwnProps extends RouteComponentProps {
    title: string,
    imageUrl: string
    size?: string
    linkUrl: string
}

type Props = OwnProps; // comprende pourquoi on passe d'un type a une interface

const MenuItem: FunctionComponent<Props> = ({
  size, imageUrl, title, history, match, linkUrl,
}: OwnProps) => (
  <div
    role="link"
    className={`${size || ''} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    onKeyDown={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl}`,
      }}
    />

    <div className="content">
      <h1 className="title">
        {' '}
        {title.toUpperCase()}
      </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default withRouter(MenuItem);
