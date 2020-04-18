import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchCollecionStart } from '../../redux/ShopData/shopdata-action';
import CollectionPageContainer from '../Category/CollectionPageContainer';
import CollectionOverviewContainer from '../../components/Collection-overview/collectionOverviewContainer';

interface MatchParams {
  name: string;
}

interface Props {
  isLoading: boolean;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

type FProps = MatchProps & Props & DispatchProps;

class ShopsPages extends React.Component<FProps, {}> {
  componentDidMount(): void {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

interface DispatchProps {
  getData: () => any;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,_props: Props
): DispatchProps => ({
  getData: () => dispatch(fetchCollecionStart()),
});

export default connect(null, mapDispatchToProps)(ShopsPages);
