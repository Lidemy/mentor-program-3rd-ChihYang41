import axios from 'axios';

// action types
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_LATEST_POSTS = 'GET_LATEST_POSTS';

// action creator
export const addPost = (author, title, body) => ({
  type: ADD_POST,
  payload: axios.post('https://qootest.com/posts', {
    author, title, body,
  }),
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: axios.delete(`https://qootest.com/posts/${id}`),
});

export const editPost = (id, author, title, body) => ({
  type: EDIT_POST,
  payload: axios.put(`https://qootest.com/posts/${id}`, {
    author, title, body,
  }),
});

export const getSinglePost = id => ({
  type: GET_SINGLE_POST,
  payload: axios.get(`https://qootest.com/posts/${id}`),
});

export const getAllPosts = () => ({
  type: GET_ALL_POSTS,
  payload: axios.get('https://qootest.com/posts?_sort=id&_order=desc'),
});

export const getLatestPosts = () => ({
  type: GET_LATEST_POSTS,
  payload: axios.get('https://qootest.com/posts?_sort=id&_order=desc&_limit=10'),
});
