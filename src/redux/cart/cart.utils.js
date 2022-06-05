const sizes = ['S', 'M', 'L', "XL", "XXL"]

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1, size: sizes[0]}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map( 
        cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}

export const increaseSize = (cartItems, cartItemToIncrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToIncrease.id);

    if (existingCartItem){
        let sizeIndex = sizes.indexOf(existingCartItem.size);
        sizeIndex = sizeIndex + 1;

        if (sizeIndex === 5){
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToIncrease.id ? {...cartItem, size: sizes[0] } : cartItem
            )
        } else{
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToIncrease.id ? {...cartItem, size: sizes[sizeIndex] } : cartItem
            )
        }
    }
}

export const decreaseSize = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id);

    if (existingCartItem){
        let sizeIndex = sizes.indexOf(existingCartItem.size);
        sizeIndex = sizeIndex - 1;

        if (sizeIndex === -1){
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToDecrease.id ? {...cartItem, size: sizes[4] } : cartItem
            )
        } else{
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToDecrease.id ? {...cartItem, size: sizes[sizeIndex] } : cartItem
            )
        }
    }
}