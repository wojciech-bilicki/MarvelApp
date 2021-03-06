import React from 'react';
import { shallow } from 'enzyme';

import Master from '../Master';
import HeroCard from '../HeroCard';
import data from '../../data.json';

describe('Master component', () => {
  let master = null;
  beforeEach(() => {
    master = shallow(<Master heroes={data.heroes} />);
  });
  it('renders properly', () => {
    expect(master).toMatchSnapshot();
  });
});
