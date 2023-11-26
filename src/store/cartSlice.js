import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                let existingProduct = state.cart.findIndex((item) => item.id === action.payload.id);
                if (existingProduct >= 0) {
                    state.cart[existingProduct].quantity ++;
                }
                else {
                    state.cart.push(action.payload);
                }
            },
            removeItem: (state, action) => {
                state.cart =  state.cart.filter((product) => product.id !== action.payload.id);
            }
        }
    }
);

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;