import { configureStore } from '@reduxjs/toolkit'
import  cartReducer from './slice'
import productReducer from './productSlice'
import authReducer from '../features/slice'

export const store = configureStore({
    reducer : {cart : cartReducer , 
              product : productReducer ,
              auth : authReducer  
            }
              
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch