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
        }
    }
})

export const {addItem} = addToCart.actions //export function that inside reducer
export default addToCart.reducer;