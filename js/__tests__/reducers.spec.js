import rootReducer from '../redux/store';
import { setSearchTerm } from '../redux/actionCreators';

describe('root reducer', () => {
  it('should return empty searchTerm', () => {
    const action = {
      type: 'DIFFERENT_ACTION'
    };
    expect(rootReducer({ searchTerm: '' }, action)).toEqual({ searchTerm: '' });
  });

  it('should update searchTerm when setSearchTerm action gets passed', () => {
    const action = setSearchTerm('Iron Man');
    expect(rootReducer({ searchTerm: '' }, action)).toEqual({
      searchTerm: 'Iron Man'
    });
  });
});
