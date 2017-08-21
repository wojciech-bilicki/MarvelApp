// @flow
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import type { Hero } from './types';

import HeroCard from './HeroCard';

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  searchTerm: string,
  heroes: Array<Hero>
};

class Master extends React.Component<null, Props> {
  state = {
    heroes: []
  };
  componentDidMount() {
    axios
      .get('http://localhost:8001/heroes')
      .then(heroes => this.setState({ heroes }));
  }

  render() {
    return (
      <div>
        <CardListWrapper>
          {this.state.heroes
            .filter(hero => {
              if (!this.props.searchTerm) {
                return true;
              }
              return (
                `${hero.name} ${hero.true_name}`
                  .toUpperCase()
                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0
              );
            })
            .map(hero => <HeroCard hero={hero} key={hero.id} />)}
        </CardListWrapper>
      </div>
    );
  }
}

export default Master;
