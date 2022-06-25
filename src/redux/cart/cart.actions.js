import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN 
})

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const removeAllItems = () => ({
    type: CartActionTypes.REMOVE_ALL_ITEMS
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const increaseSize = item => ({
    type: CartActionTypes.INCREASE_SIZE,
    payload: item
})

export const decreaseSize = item => ({
    type: CartActionTypes.DECREASE_SIZE,
    payload: item
})