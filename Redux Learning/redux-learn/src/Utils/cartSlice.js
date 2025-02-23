import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:'cart',
        initialState:{
          k:0
        },
        reducers:{
            addtocart:(state)=>{
                state.k+=1;
            }
        }
    }
)
export const {addtocart}=cartSlice.actions;
export default cartSlice.reducer;