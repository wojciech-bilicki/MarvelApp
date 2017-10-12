import {combineReducers} from 'redux';
import { SET_SEARCH_TERM } from './actionCreators';

const searchTerm = (state = '', action) => {
  if(action.type === SET_SEARCH_TERM) {
    return  action.payload
  }
  return state
}

const rootReducer = combineReducers({
  searchTerm,
})

export default rootReducer;