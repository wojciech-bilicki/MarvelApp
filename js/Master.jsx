import React from 'react';

import styled from 'styled-components';

import HeroCard from './HeroCard';

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Master = props =>
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
        .map(hero =>
          <HeroCard hero={hero} key={hero.id} label={Math.random()} />
        )}
    </CardListWrapper>
  </div>;

export default Master;
