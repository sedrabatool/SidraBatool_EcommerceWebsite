//for each data we create a slice 
//like for cart data we create a slice 

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items : [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  //reducers are basically functions that take current state and action and return new state based on the action
  //action is a object that contains the type and payload(information needed for changing thet state)
  //redux toolkit will automatically check the action type like add or remove and run reducer 
  //corresponding to it 
  reducers: {
    add: (state,action) => {
        state.items.push(action.payload)
    },
},
})


// Action creators are generated for each case reducer function
export const { add } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items
export default cartSlice.reducer