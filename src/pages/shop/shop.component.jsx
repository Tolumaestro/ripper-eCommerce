import React from "react";
import { Route } from "react-router-dom";


import CollectionsOverview from "../../components/collections-overview/collections-overview.component"


const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route path= {`${match.path}`} element={<CollectionsOverview />} />
    </div>
) 


export default ShopPage;