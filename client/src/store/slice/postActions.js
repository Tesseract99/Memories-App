import * as api from "../../api/index";
import {
  fetchAllPosts,
  createOnePost,
  updateOnePost,
  deleteOnePost,
} from "./postSlice";
// //Action Creator Thunk
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch(fetchAllPosts(data));
    } catch (error) {
      console.log("ERROR", error.message);
    }
  };
};

export const createPost = (newPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(newPost);
      dispatch(createOnePost(data));
    } catch (error) {
      console.log("ERROR!", error.message);
    }
  };
};

export const updatePost = (id, updatedPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, updatedPost);

      dispatch(updateOnePost(data));
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id);
      dispatch(deleteOnePost({ id: id }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const likePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
      console.log(data);
      dispatch(updateOnePost(data));
    } catch (error) {
      console.log(error);
    }
  };
};
