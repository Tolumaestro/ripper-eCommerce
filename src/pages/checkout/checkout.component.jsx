import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useNavigate } from "react-router-dom";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./checkout.styles.scss";

const CheckoutPage= ({ cartItems, total, user }) => {

    const navigate = useNavigate()
    return (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className="total">
            <span>TOTAL: &#8358;{total}</span>
        </div>

        <CustomButton onClick={ () => {user ? navigate("/payment") : navigate("/signin") } } >Pay Now</CustomButton>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    user: selectCurrentUser
})

export default connect(
    mapStateToProps
)(CheckoutPage);