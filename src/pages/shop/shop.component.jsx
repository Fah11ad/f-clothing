import React from "react";
import { Route } from "react-router-dom";
// import { connect } from 'react-redux'

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
// import { createStructuredSelector } from 'reselect'
// import { selectCollections } from "../../redux/shop/shop.selector";
// SHOP DATA to REDUX - 4 - pull it shop component
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

// SHOP DATA to REDUX - 5 - connect this component to Redux

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// })

export default ShopPage;
