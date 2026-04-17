import { createSlice} from "@reduxjs/toolkit"; 

export interface User {
    name : string | null,
    password : string | null,
    isAuthenticated : boolean
}

const initialState : User = {
    name : null,
    password: null,
    isAuthenticated : false
}

//create a authSlice ..
const authSlice = createSlice({
    name : 'auth',
    initialState , 
    reducers : {
        login : (state : any , actions ) =>{
            state.name = actions.payload.name;
            state.password = actions.payload.password;
            state.isAuthenticated = true
            localStorage.setItem("credentials" , JSON.stringify(state))
        },
        logout : (state : any ) =>{
            state.name = null;
            state.password = null;
            state.isAuthenticated = false
            localStorage.clear()
        }
    }
})
export const {login ,logout} = authSlice.actions; 
export default authSlice.reducer;