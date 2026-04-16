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
            const exits = state.products.find((item: any) => item.id === actions.payload);
            if (exits) {
                exits.quantity += 1;
            } else {
                state.products.push({ ...actions.payload, quantity: 1 })
            }
            localStorage.setItem("products", JSON.stringify(state.products));

        },
        removeItem: (state: any, actions: any) => {
            const updatedProducts = state.products.filter((item: any) => item.id != actions.payload.id);
            state.products = updatedProducts;
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        clearCart: (state: any) => {
            state.products = [];
            localStorage.setItem("products", JSON.stringify(state.products))
        },
        increaseQuantity: (state: any, actions: any) => {
            const findProduct = state.products.find((item: any) => item.id === actions.payload.id);
            if (findProduct) findProduct.quantity += 1;
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        decreaseQuantity: (state: any, actions: any) => {
            const findProduct = state.products.find((item: any) => item.id === actions.payload.id);
            if (findProduct) findProduct.quantity -= 1;
            if(findProduct.quantity <= 1) findProduct.quantity = 1;
            localStorage.setItem("products", JSON.stringify(state.products));
        }
    }
})

export const { addItem, removeItem, clearCart , increaseQuantity , decreaseQuantity} = addToCart.actions //export function that inside reducer
export default addToCart.reducer;