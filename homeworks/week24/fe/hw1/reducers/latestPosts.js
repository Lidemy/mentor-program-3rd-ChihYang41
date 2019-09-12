import { GET_LATEST_POSTS } from '../action';

const initState = {
  latestTenPosts: [],
  isLoadingGetLatestPosts: false,
};

export default function latestPostsReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_LATEST_POSTS}_PENDING`:
      return {
        ...state,
        isLoadingGetLatestPosts: true,
      };
    case `${GET_LATEST_POSTS}_FULFILLED`:
      return {
        ...state,
        latestTenPosts: action.payload.data,
        isLoadingGetLatestPosts: false,
      };
    case `${GET_LATEST_POSTS}_REJECTED`:
      return {
        ...state,
        isLoadingGetLatestPosts: false,
      };
    default:
      return state;
  }
}
