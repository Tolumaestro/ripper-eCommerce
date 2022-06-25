import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem, increaseSize, decreaseSize } from "../../redux/cart/cart.actions";

import { CheckoutItemContainer, ImageContainer, ItemProp, SpecialItemProp, RemoveButton } from "./checkout-item.styles";


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, increaseSize, decreaseSize  }) => {
    const { name, imageUrl, price, quantity, size } = cartItem
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <ItemProp>{name}</ItemProp>
            <SpecialItemProp className="quantity">
                <div onClick={() => removeItem(cartItem) }> &#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem) }> &#10095;</div>
            </SpecialItemProp>
            <span className="size">
                <div onClick={() => decreaseSize(cartItem) }> &#10094;</div>
                <span>{size}</span>
                <div onClick={() => increaseSize(cartItem) }> &#10095;</div>
            </span>
            <ItemProp>&#8358;{price}</ItemProp>
            <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    increaseSize: item => dispatch(increaseSize(item)),
    decreaseSize: item => dispatch(decreaseSize(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem)