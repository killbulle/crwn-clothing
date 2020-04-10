import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectShopDataFilter } from '../../redux/ShopData/shopdata-selector';
import { RootState } from '../../redux/root-reduces';
import { Category } from '../../redux/ShopData/shopdata-action';
import './CollectionPage.scss';
import { Item } from '../../redux/ShopData/Item';
import CollectionItem from '../../components/collection-item/CollectionItem';


type Props = {
    data: Category;
}

interface MatchParams {
    collectionId: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

type CategoryParams = Props & MatchProps;

function CollectionPage({ data }: CategoryParams) {
  console.log(data.routeName);

  // @ts-ignore
  return (
    <div className="collection-page">
      <h2 className="title">{data.title}</h2>
      <div className="items">
        {
                    data.items.map((it: Item) => (
                      <CollectionItem
                        key={it.id}
                        imageUrl={it.imageUrl}
                        name={it.name}
                        price={it.price}
                        id={it.id}
                      />
                    ))
                }
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState, props: CategoryParams) => ({
  data: selectShopDataFilter(props.match.params.collectionId)(state)!, // FIXME the undefined
});

export default connect(mapStateToProps)(CollectionPage);
