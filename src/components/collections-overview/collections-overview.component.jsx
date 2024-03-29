import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component"

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import './collections-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
    return(
        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
        }

const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(
    mapStatetoProps
)(CollectionOverview)