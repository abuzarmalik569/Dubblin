import { createSlice } from "@reduxjs/toolkit"

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        cartlist:[]
    },
    reducers:{
       addItems:(state,action)=>{
          state.cartlist.push(action.payload)
       },
       removeItems:(state,action)=>{
          state.cartlist= state.cartlist.filter(item => item.id !== action.payload.id);
       },
       increaseQuantity: (state, action) => {
        const item = state.cartlist.find(
            (item) => item.id === action.payload.id
        );
        if (item) {
            item.quantity += 1;
        }
    },
    decreaseQuantity: (state, action) => {
        const item = state.cartlist.find(
            (item) => item.id === action.payload.id
        );
        if (item && item.quantity > 1) {
            item.quantity -= 1;
        }
    },
    
    }

})

export const{addItems,removeItems,increaseQuantity, decreaseQuantity}=cartSlice.actions
export const cartReducer= cartSlice.reducer