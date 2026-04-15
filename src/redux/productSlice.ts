import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchApiResponse  =  createAsyncThunk('products' , async function() {
    try{
      const response = await fetch('https://dummyjson.com/products');
      const res = await response.json();
      return res;
    } catch(err) {throw new Error('Api error..')}
})
const initialState = {
    data : [],
    status : true,
    error : null
}

const productsSlices = createSlice({
    name : 'products',
    initialState , 
    reducers : {} , 
    extraReducers : function (builder ){
        builder.addCase(fetchApiResponse.pending , (state) =>{
            state.status = false;
        })
        builder.addCase(fetchApiResponse.fulfilled , (state , actions) =>{
            state.data = actions.payload;
        })
        builder.addCase(fetchApiResponse.rejected , (state , actions) =>{
            state.error = actions.error.message
        })
    }
})

export default productsSlices.reducer