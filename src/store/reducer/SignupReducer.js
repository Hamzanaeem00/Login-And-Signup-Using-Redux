import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
    name : 'Signup',
    initialState: {
        Signup: [],
        isFetching: false,
        error: false
    },
    reducers: {
       getSignupDataStart: (state)=>{
        state.isFetching = true;
        state.error= flase
       },
       getSignupDataSuccess: (state, action) => {
        state.isFetching = false;
        state.Signup = action.payload;
      },
      getSignupDataFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },

    },
});
 export const {getSignupDataStart,getSignupDataSuccess, getSignupDataFailure}=SignupSlice.actions;

export default SignupSlice.actions