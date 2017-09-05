// @flow
import React from 'react';
import styled from 'styled-components';
import type { Hero } from './types';
import FavouriteHero from './FavouriteHero';

const MyHeroesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-top: 32px;
  border-left: 1px solid red;

  h1,
  h2 {
    text-align: center;
    width: 100%;
    color: white;
  }

  h2 {
    margin-top: 32px;
    color: black;
  }
`;

type Props = {
  favouriteHeroes: Array<Hero>,
  onDelete: number => void
};

const MyHeroes = (props: Props) =>
  <MyHeroesWrapper>
    <h1>My Heroes</h1>
    {props.favouriteHeroes.length === 0 &&
      <h2>You have not added any heroes</h2>}
    {props.favouriteHeroes.length > 0 &&
      props.favouriteHeroes.map(hero =>
        <FavouriteHero hero={hero} onDelete={props.onDelete} key={hero.id} />
      )}
  </MyHeroesWrapper>;

export default MyHeroes;
