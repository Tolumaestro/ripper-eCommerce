import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart }) => { 
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className="shop-page">

            <Routes>
                <Route path="" element={<CollectionsOverviewContainer />} />
                <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
                <Route path={`*`} element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
                
        </div>
    ) 
    
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);