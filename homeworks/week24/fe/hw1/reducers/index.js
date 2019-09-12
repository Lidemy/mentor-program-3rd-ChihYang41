import { combineReducers } from 'redux';
import singlePostReducer from './singlePost';
import allPostsReducer from './getAllPosts';
import latestPostsReducer from './latestPosts';

const reducer = combineReducers({
  singlePostReducer,
  allPostsReducer,
  latestPostsReducer,
});

export default reducer;
