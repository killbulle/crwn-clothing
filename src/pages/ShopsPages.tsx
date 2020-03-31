import React from 'react';
import SHOP_DATA from './shop.data';
import { ShopData } from './ShopData';
import CollectionPreview from '../components/collection-preview/CollectionPreview';

interface OwnProps {
}

type Props = OwnProps;


class ShopsPages extends React.Component<Props, ShopData[]> {
  constructor(props: OwnProps) {
    super(props);
    this.state = SHOP_DATA;
  }

  render() {
    const { state } = this;
    return (
      <div>
        {
                state.map((it: ShopData) => <CollectionPreview key={it.id} shopData={it} />)
            }
      </div>
    );
  }
}

export default ShopsPages;
