import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { authReducer } from "./slices/authSlice";
import { postReducer } from "./slices/postSlice";


const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    post: postReducer,
});

export const globalStore = configureStore({
    reducer: rootReducer,
});