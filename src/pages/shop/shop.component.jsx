import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Spinner from "../../components/spinner/spinner.component";
const CollectionsOverviewContainer = lazy(() => import("../../components/collections-overview/collections-overview.container"))
const CollectionPageContainer = lazy(() => import("../collection/collection.container"))

const ShopPage = ({ fetchCollectionsStart }) => { 
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className="shop-page">
            <Suspense fallback= {<Spinner />}>
                <Routes>
                    <Route path="" element={<CollectionsOverviewContainer />} />
                    <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
                    <Route path={`*`} element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
            </Suspense>
                
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