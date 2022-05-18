import React from "react";
import { Route, Routes } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component{ 
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }


    render() {
        const { isCollectionFetching, isCollectionsLoaded } = this.props;

        return (
            <div className="shop-page">

                <Routes>
                    <Route path="" element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />} />
                    <Route path={`/:collectionId`} element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />} />
                    <Route path={`*`} element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
                 
            </div>
        ) 
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);