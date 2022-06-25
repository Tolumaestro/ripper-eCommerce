import React from "react";

import { CartItemContainer, DetailsSpan, Image, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <Image  src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <DetailsSpan>{name}</DetailsSpan>
            <DetailsSpan className="price"> {quantity} x &#8358;{price}</DetailsSpan>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem