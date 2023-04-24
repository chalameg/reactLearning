import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;

            const existingItem = state.items.filter(item => item.id === newItem.id)

            if(!existingItem){
                state.items.push({itemId: newItem.itemId, price: newItem.price, totalPrice: newItem.price, quantity: 1, name: newItem.title})
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.filter(item => item.id === id)
            if(existingItem.quantity===1){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--;
                // existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }

        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;