import { configureStore } from "@reduxjs/toolkit";
import SignupReducer from "./reducer/SignupReducer";
// import SignupReducer from "./reducer/SignupReducer"


export default configureStore({
    reducer:{
        Signup : SignupReducer
    }
})