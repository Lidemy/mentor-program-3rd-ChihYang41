import { combineReducers } from 'redux';
import singlePostReducer from './singlePost';
import AllPostsReducer from './getAllPosts';

const reducer = combineReducers({
  singlePostReducer,
  AllPostsReducer,
});

export default reducer;
