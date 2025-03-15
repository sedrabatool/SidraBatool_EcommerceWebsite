//we need to register each reducer here 

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice/cartSlice'

//store is a global varibale 
//but if store is a global variable it wont work in next js because 
//if it is global varibale and also it is client component
//means it will render on both server and client
//so any one can change it as it is shared variable

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
        },
        })
}
            