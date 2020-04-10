import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionOverview from '../components/Collection-overview/Collection-overview';
import CollectionPage from './Category/CollectionPage';

interface MatchParams {
    name: string;
}


interface Props {
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const ShopsPages = ({ match }: Props & MatchProps) => {
  console.log(JSON.stringify(match.path));
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};


export default ShopsPages;
