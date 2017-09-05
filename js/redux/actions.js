// @flow
const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export { SET_SEARCH_TERM };
export type ActionType = 'SET_SEARCH_TERM';

export type Action = {
  type: ActionType,
  payload: string
};
