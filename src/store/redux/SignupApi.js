import { getSignupDataFailure, getSignupDataStart, getSignupDataSuccess } from "../reducer/SignupReducer";

export const getSignupData = async (dispatch) => {
    dispatch(getSignupDataStart());
    try {
      const res = await axios.post();
      dispatch(getSignupDataSuccess(res.data.payload));
      return res;
    } catch (error) {
      dispatch(getSignupDataFailure());
      return error;
    }
  };