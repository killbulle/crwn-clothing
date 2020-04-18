import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reduces';
import { selectFetching } from '../../redux/ShopData/shopdata-selector';
import CollectionPage from './CollectionPage';
import withSpinner from '../../components/withSpinner/withSpinner';

interface Props {
  isLoading: boolean;
}

const mapRootStateToProps = createStructuredSelector<RootState, Props>({
  isLoading: selectFetching,
});

const CollectionPageContainer = connect(mapRootStateToProps)(
  withSpinner(CollectionPage)
);
export default CollectionPageContainer;
