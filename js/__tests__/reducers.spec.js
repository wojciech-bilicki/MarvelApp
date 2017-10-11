import rootReducer from '../redux/rootReducer';
import { setSearchTerm } from '../redux/actionCreators';

describe('root reducer', () => {
  it('should return empty searchTerm', () => {
    const action = {
      type: 'DIFFERENT_ACTION'
    }
    expect(rootReducer({searchTerm: ''}, action)).toEqual({searchTerm: ''});
  })

  it('should update on setSearchTerm action', () => {
    const action = setSearchTerm('Iron Man');
    expect(rootReducer({searchTerm: ''}, action)).toEqual({
      searchTerm: "Iron Man"
    })
  })
})