import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_SUCCESS } from '../constants/action-types';

// The Store listens for action cases
// This is where all state changing must be done.
const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state, 
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}