import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
}

//Create a slice 
const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //Function name and pass argumant as state 
        addItem: (state: any, actions: any) => {
            state.products.push(actions.payload);
            localStorage.setItem("products", JSON.stringify(state.products));
            
        },
        removeItem: (state: any , actions : any ) => {
            const updatedProducts = state.products.filter((item : any )=> item.id != actions.payload.id);
            state.products = updatedProducts;
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        clearCart: (state: any) => {
            state.products = [] ;
            localStorage.setItem("products" , JSON.stringify(state.products))
        }
    }
})

export const { addItem, removeItem, clearCart } = addToCart.actions //export function that inside reducer
export default addToCart.reducer;