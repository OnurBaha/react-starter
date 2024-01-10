import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cartItems: []
}


export const cartReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_TO_CART:
            // state.cartItems.push(action.payload);
            // STATE DEĞİŞİMİ
            // State is immutable
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case REMOVE_FROM_CART:
            // remove işlemi
            // state.cartItems.filter()
            return { ...state, cartItems: state.cartItems.filter((i:any) => i.id !== action.payload.id) }
        case CLEAR_CART:
            // clear işlemi
            return { ...state, cartItems: [] }
        default:
            return state;
    }
}