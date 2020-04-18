import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {RootState} from '../../redux/root-reduces';
import {selectFetching} from '../../redux/ShopData/shopdata-selector';
import withSpinner from '../withSpinner/withSpinner';
import CollectionOverview from './Collection-overview';

interface Props {
    isLoading: boolean;
}

const mapRootStateToProps = createStructuredSelector<RootState, Props>({
    isLoading: selectFetching,
});

const CollectionOverviewContainer = connect(mapRootStateToProps)(
    withSpinner(CollectionOverview)
);
export default CollectionOverviewContainer;
