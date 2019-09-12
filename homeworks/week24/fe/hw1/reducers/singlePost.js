import { GET_SINGLE_POST, EDIT_POST } from '../action';

const initState = {
  singlePost: {},
  isPostRequesting: false,
  isLoadingEditPost: false,
  editPostError: null,
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
    case `${EDIT_POST}_PENDING`:
      return {
        ...state,
        isLoadingEditPost: true,
        editPostError: null,
      };
    case `${EDIT_POST}_FULFILLED`:
      return {
        ...state,
        singlePost: action.payload.data,
        isLoadingEditPost: false,
      };
    case `${EDIT_POST}_REJECTED`:
      return {
        ...state,
        isLoadingEditPost: false,
        editPostError: action.error,
      };
    default:
      return state;
  }
}
