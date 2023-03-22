// import axios from "axios";
import { createSignupDataFailure, createSignupDataStart, createSignupDataSuccess, getSignupDataFailure, getSignupDataStart, getSignupDataSuccess } from "../reducer/SignupReducer";

export const createSignupData = async (dispatch, signupData) => {
    dispatch(createSignupDataStart());
    try {
      console.log("data forwarded to redux function",signupData);
      // const res = await axios.post();
      dispatch(createSignupDataSuccess(signupData));

    } catch (error) {
      dispatch(createSignupDataFailure());
      return error;
    }
  };

  // export const getSignupData = async (dispatch) => {
  //   dispatch(getSignupDataStart());
  //   try {
  //     // console.log("data from redux function",signupData);
  //     // const res = await axios.post();
  //     dispatch(getSignupDataSuccess(signupData));

  //   } catch (error) {
  //     dispatch(getSignupDataFailure());
  //     return error;
  //   }
  // };