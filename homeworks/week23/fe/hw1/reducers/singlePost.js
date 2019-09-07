import { GET_SINGLE_POST } from '../action';

const initState = {
  singlePost: {},
  isPostRequesting: false,
};

// reducers
export default function singlePostReducer(state = initState, action) {
  switch (action.type) {
    case `${GET_SINGLE_POST}_PENDING`:
      return {
        ...state,
        isPostRequesting: true,
      };
    case `${GET_SINGLE_POST}_FULFILLED`:
      return {
        ...state,
        singlePost: action.payload.data,
        isPostRequesting: false,
      };
    case `${GET_SINGLE_POST}_REJECTED`:
      return {
        ...state,
        isPostRequesting: false,
      };
    default:
      return state;
  }
}
