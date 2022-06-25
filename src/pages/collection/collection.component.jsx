import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./collection.styles.scss"

import CollectionItem from "../../components/collection-item/collection-item.component";



const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector((state => state.shop.collections[collectionId] ))

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



export default  CollectionPage;