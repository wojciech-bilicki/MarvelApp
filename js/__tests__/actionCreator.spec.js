import {setSearchTerm, SET_SEARCH_TERM} from '../redux/actionCreators';

describe('setSearchTerm', () => {
  it('should return proper action', () => {
    expect(setSearchTerm('loki')).toEqual({
      type: SET_SEARCH_TERM,
      payload: 'loki'
    })
  })

  it('should return proper action based on argument', () => {
    expect(setSearchTerm('hulk')).toEqual({
      type: SET_SEARCH_TERM,
      payload: 'hulk'
    })
  })
})