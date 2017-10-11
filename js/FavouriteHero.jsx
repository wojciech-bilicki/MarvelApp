import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../assets/ic_delete.png';

const FavouriteHeroWrapper = styled.div`
  margin: 16px;
  max-height: 64px;
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-between;

  img:nth-of-type(1) {
    height: 64px;
  }

  img:nth-of-type(2) {
    height: 48px;
    margin-right: 16px;

    &:hover {
      filter: opacity(0.75);
      cursor: pointer;
    }
  }
`;

const FavouriteHero = ({ hero, onDelete }) => (
  <FavouriteHeroWrapper>
    <img src={hero.image} alt="Hero image" />
    <span>{hero.name}</span>
    <img src={deleteIcon} alt="Delete icon" onClick={() => onDelete(hero.id)} />
  </FavouriteHeroWrapper>
);

export default FavouriteHero;