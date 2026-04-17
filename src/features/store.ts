import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/slice'

export const authStore = configureStore({
    reducer : {authReducer} 
})

export type RootState = ReturnType<typeof authStore.getState>
export type AppDispatch = typeof authStore.dispatch

