// @flow
import type { Action } from './actions';

const setSearchTerm = (searchTerm: string): Action => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm
});

export { setSearchTerm };
