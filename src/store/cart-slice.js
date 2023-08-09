import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
    cart: 
        {
            id : 1,
            name : "Fall Limited Edition Sneakers",
            description : "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            amount : 1,
            price: 250,
            discount : {
                available : true,
                percentage : .5
            },
            mainImg: require("../images/image-product-1.jpg"),
            images : [
                { main : require("../images/image-product-1.jpg"), thumbnail: require("../images/image-product-1-thumbnail.jpg") },
                { main : require("../images/image-product-2.jpg"), thumbnail: require("../images/image-product-2-thumbnail.jpg") },
                { main : require("../images/image-product-3.jpg"), thumbnail: require("../images/image-product-3-thumbnail.jpg") },
                { main : require("../images/image-product-4.jpg"), thumbnail: require("../images/image-product-4-thumbnail.jpg") },
            ]
        },
    cartIsClicked : false,
    carts : [],
    totalAmount : 0
    
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        cartHandler(state, action){
            state.cartIsClicked = !state.cartIsClicked
        },
        addToCart(state, action){
            console.log(action.payload);
            const pickedItem  = state.carts.find(elem=>elem.id === action.payload.id);
            state.totalAmount = state.totalAmount + action.payload.amount
            if (pickedItem) {
                pickedItem.amount = pickedItem.amount + action.payload.amount;
            } else{
                state.carts.push(action.payload);   
            }
        },
        deleteFromCart(state, action){
            console.log(action.payload);
            state.carts = state.carts.filter(elem=>elem.id !== action.payload)
            state.totalAmount = 0
        }
    }
}) 

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;