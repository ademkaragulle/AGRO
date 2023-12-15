import { configureStore } from "@reduxjs/toolkit";
import { getcartSliceReducer } from "./slices/cartSlice";


export const store = configureStore
({
    reducer: {
        cart: getcartSliceReducer
    }
})