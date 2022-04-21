import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection.styles.scss"

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item";



const CollectionPage = () => {
    const { collectionId } = useParams()

    const collection = useSelector((state => state.shop.collections[collectionId] ))

    console.log(collection);

    const { title, items } = collection


    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectCollection
})

export default  connect(mapStateToProps)(CollectionPage);