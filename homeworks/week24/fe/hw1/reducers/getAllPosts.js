import { GET_ALL_POSTS, ADD_POST, DELETE_POST } from '../action';

const initState = {
  allPosts: [],
  isLoadingGetAllPosts: false,
  isLoadingDeletePost: false,
  isLoadingAddPost: false,
  getAllPostsError: null,
  deletePostError: null,
  addPostError: null,
};

// reducers
export default function allPostsReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_ALL_POSTS}_PENDING`:
      return {
        ...state,
        isLoadingGetAllPosts: true,
        getAllPostsError: null,
      };
    case `${GET_ALL_POSTS}_FULFILLED`:
      return {
        ...state,
        allPosts: action.payload.data,
        isLoadingGetAllPosts: false,
      };
    case `${GET_ALL_POSTS}_REJECTED`:
      return {
        ...state,
        isLoadingGetAllPosts: false,
        getAllPostsError: action.error,
      };
    case `${ADD_POST}_PENDING`:
      return {
        ...state,
        isLoadingAddPost: true,
        addPostError: null,
      };
    case `${ADD_POST}_FULFILLED`:
      return {
        ...state,
        isLoadingAddPost: false,
      };
    case `${ADD_POST}_REJECTED`:
      return {
        ...state,
        isLoadingGetAllPosts: false,
        addPostError: action.error,
      };
    case `${DELETE_POST}_PENDING`:
      return {
        ...state,
        isLoadingDeletePost: true,
        deletePostError: null,
      };
    case `${DELETE_POST}_FULFILLED`:
      return {
        ...state,
        isLoadingDeletePost: false,
      };
    case `${DELETE_POST}_REJECTED`:
      return {
        ...state,
        isLoadingDeletePost: false,
        deletePostError: action.error,
      };
    default:
      return state;
  }
}
