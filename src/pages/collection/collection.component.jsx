import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss"

import collectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selector";



const CollectionPage = () => {

    const { collectionId } = useParams()

    const items = useSelector((state) => state.shop.collections.filter(
        section => section.routeName === collectionId
    )[0]);

    console.log(items)

    return (
        <div className="category">
            <h2>Category Page</h2>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectCollection
})

export default  connect(mapStateToProps)(CollectionPage);