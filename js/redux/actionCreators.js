export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
})

export {setSearchTerm};