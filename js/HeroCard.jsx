// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Hero } from './types';

const HeroCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 16px;
  box-shadow: 3px 2px 6px #666666;
  max-width: 200px;

  img {
    width: 150px;
    height: 200px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  h5,
  h4 {
    padding: 8px 0;
    text-align: center;
    word-wrap: break-word;
  }

  button {
    color: #ffffff;
    font-size: 20px;
    background: #3f34d9;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    border: none;
    margin-bottom: 8px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroCard = ({
  hero,
  onAddToFavouritesRequested
}: {
  hero: Hero,
  onAddToFavouritesRequested: number => void
}) =>
  <HeroCardWrapper>
    <Link to={`/detail/${hero.id}`}>
      <h4>
        {hero.name}
      </h4>
      <img src={hero.image} alt="Hero Portrait" />
      <h5>
        {hero.true_name}
      </h5>
    </Link>
    <button onClick={() => onAddToFavouritesRequested(hero.id)}>
      Add to my heroes
    </button>
  </HeroCardWrapper>;

export default HeroCard;
