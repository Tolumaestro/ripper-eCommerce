import React from "react";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

// import './collection-item.styles.scss'

import { CollectionItemDiv, CollectionItemImage, CollectionFooterContainer, CollectionFooterNameSpan, CollectionFooterPriceSpan, CustomButtonContainer } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemDiv>
            <CollectionItemImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <CollectionFooterNameSpan> {name} </CollectionFooterNameSpan>
                <CollectionFooterPriceSpan> &#8358;{price} </CollectionFooterPriceSpan>
            </CollectionFooterContainer>
            <CustomButtonContainer onClick={() => addItem(item)} inverted>Add to Cart</CustomButtonContainer>
        </CollectionItemDiv>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem)