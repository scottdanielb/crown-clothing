import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainerHOC from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainerHOC from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    //all APIs requests must go here
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainerHOC}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainerHOC}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
