import { GET_ALL_POSTS } from '../action';

const initState = {
  allPosts: [],
  isLoadingDeletePost: false,
};

// reducers
export default function AllPostsReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_ALL_POSTS}_PENDING`:
      return {
        ...state,
      };
    case `${GET_ALL_POSTS}_FULFILLED`:
      return {
        ...state,
        allPosts: action.payload.data,
      };
    case `${GET_ALL_POSTS}_REJECTED`:
      return {
        ...state,
      };
    default:
      return state;
  }
}
