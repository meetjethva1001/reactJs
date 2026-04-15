import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     value : 0
}

//Create a slice 
const addToCart = createSlice({
    name : 'cart',
    initialState , 
    reducers : {
        //Function name and pass argumant as state 
        addItem : (state : any) =>{
            state.value += 1;
        },
        removeItem : (state : any ) =>{
            state.value > 0 ? state.value -= 1 : 0;
        },
        clearCart : (state : any ) =>{
            state.value = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = addToCart.actions //export function that inside reducer
export default addToCart.reducer;