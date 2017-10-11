import { SET_SEARCH_TERM } from './actionCreators';

const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => ({
  ...state,
  searchTerm: action.payload
})

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state;
  }
}

export default rootReducer;