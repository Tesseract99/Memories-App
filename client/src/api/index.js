import axios from "axios";

// const url = "http://localhost:5000/posts";
const url = "https://salty-shelf-09646.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => {
  return axios.delete(`${url}/${id}`);
};

export const likePost = (id) => {
  return axios.patch(`${url}/${id}/likePost`);
};
