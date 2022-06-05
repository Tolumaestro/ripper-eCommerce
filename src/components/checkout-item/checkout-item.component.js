import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem, increaseSize, decreaseSize } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss"

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, increaseSize, decreaseSize  }) => {
    const { name, imageUrl, price, quantity, size } = cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem) }> &#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem) }> &#10095;</div>
            </span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseSize(cartItem) }> &#10094;</div>
                <span className="value">{size}</span>
                <div className="arrow" onClick={() => increaseSize(cartItem) }> &#10095;</div>
            </span>
            <span className="price">&#8358;{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
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