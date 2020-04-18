/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MenuItem from '../menu-item/MenuItem';

type Section = {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
};

type DirectoryState = {
  sections: Section[];
};
type Props = {};

class Directory extends React.Component<Props, DirectoryState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map((sec: Section) => (
          <MenuItem key={sec.id} {...sec} />
        ))}
      </div>
    );
  }
}

export default Directory;
