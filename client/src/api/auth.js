import axios from "axios";

const url = "http://localhost:5000/auth";

export const signInRequest = (formData) => {
  return axios.post(`${url}/signin`, formData);
};
export const signUpRequest = (formData) => {
  return axios.post(`${url}/signup`, formData);
};
