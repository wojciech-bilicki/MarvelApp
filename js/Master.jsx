// @flow
import React from 'react';
import styled from 'styled-components';
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

const Master = (props: Props) =>
  <div>
    <CardListWrapper>
      {props.heroes
        .filter(hero => {
          if (!props.searchTerm) {
            return true;
          }
          return (
            `${hero.name} ${hero.true_name}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
          );
        })
        .map(hero => <HeroCard hero={hero} key={hero.id} />)}
    </CardListWrapper>
  </div>;

export default Master;
