import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions"

import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan } from "./cart-dropdown.styles";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
};

const CartDropdown = ({ cartItems, dispatch }) => {

    const navigate = useNavigate();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                ( cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : (
                        <EmptyMessageSpan className="empty-message">Your cart is empty</EmptyMessageSpan>
                    )
                }

            </CartItemsContainer>
            <CustomButton onClick={()=> {
                navigate("/checkout") 
                dispatch(toggleCartHidden())
                }} >GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))