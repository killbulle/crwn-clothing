import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reduces';
import { selectShopDataAsArray } from '../../redux/ShopData/shopdata-selector';
import { Category } from '../../redux/ShopData/shopdata-action';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './_Collection-overview.scss';

interface Props {
    datas: Category[]
}


const CollectionOverview = ({ datas }: Props) => (
  <div className="Collection-overview">
    {
            datas.map((it: Category) => <CollectionPreview key={it.id} shopData={it} />)
        }
  </div>
);


const mapRootStateToProps = createStructuredSelector<RootState, Props>({ datas: selectShopDataAsArray });


export default connect(mapRootStateToProps)(CollectionOverview);
