import React from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";


import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component";


const ShopPage = () => {

    const location = useLocation()
    const { collectionId } = useParams()

    return (
        <div className="shop-page">
            

            <Routes>
                <Route path="" element={<CollectionsOverview />} />
                <Route path={`/:collectionId`} element={<CollectionPage />} />
            </Routes>
            
        </div>
    ) 
}

export default ShopPage;