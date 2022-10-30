import { signUpRequest, signInRequest } from "../../api/auth";
import { auth } from "./authSlice";

export const signUpAction = (formData) => {
  return async (dispatch) => {
    //invoke API request
    const { data } = await signUpRequest(formData);
    //dispatch action to reducer
    const token = data.jwtToken;
    const result = { name: formData.firstName + " " + formData.lastName };
    dispatch(auth({ result, token }));
    console.log(data);
  };
};
export const signInAction = (formData) => {
  return async (dispatch) => {
    const { data } = await signInRequest(formData);
    const token = data.jwtToken;
    const result = { name: data.userData.name };
    dispatch(auth({ result, token }));
    console.log(data);
  };
};
