import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
    name : 'Signup',
    initialState: {
        signup: [],
        isFetching: false,
        error: false
    },
    reducers: {
      createSignupDataStart: (state)=>{
        state.isFetching = true;
        state.error= false
       },
       createSignupDataSuccess: (state, action) => {
         state.isFetching = false;

        let payload = action.payload
        console.log("payload", payload);
        // state.Signup = action.payload;
          state.signup.push({
            payload,
          })
      },
      createSignupDataFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
       getSignupDataStart: (state)=>{
        state.isFetching = true;
        state.error= flase
       },
       getSignupDataSuccess: (state, action) => {
        state.isFetching = false;
        state.signup = action.payload;
      },
      getSignupDataFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },

    },
});
 export const {getSignupDataStart,getSignupDataSuccess, getSignupDataFailure , createSignupDataStart, createSignupDataSuccess, createSignupDataFailure}=SignupSlice.actions;

export default SignupSlice.reducer