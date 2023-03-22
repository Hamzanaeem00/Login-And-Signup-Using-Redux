import { configureStore } from "@reduxjs/toolkit";
import SignupReducer from "./reducer/SignupReducer";
// import SignupReducer from "./reducer/SignupReducer"


export const  store =  configureStore({
    
    reducer:{
        signup : SignupReducer
    }
})