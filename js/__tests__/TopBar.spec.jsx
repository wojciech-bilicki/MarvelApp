import React from 'react';
import { shallow } from 'enzyme';
import TopBar from '../TopBar';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('TopBar', () => {
  let topBar = null;

  beforeEach(() => {
    topBar = shallow(<TopBar />);
  });

  it('should render properly', () => {
    expect(topBar).toMatchSnapshot();
  });

  it('should change the state on input', () => {
    topBar.find('input').simulate('change', { target: { value: 'Hulk' } });
    expect(topBar.state('searchTerm')).toEqual('Hulk');
  });
});
