// @flow
import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import type {Hero} from './types';

const HeroCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 16px;
  box-shadow: 3px 2px 6px #666;
  max-width: 200px;

  img {
    width: 150px;
    height: 200px;
  }
  h5,
  h4 {
    padding: 8px 0;
    word-wrap: break-word;
    max-width: 150px;
  }

  button {
    color: #fff;
    font-size: 20px;
    background: #3f34d9;
    text-decoration: none;
    border: none;
    margin-bottom: 8px;
  }
`;

const HeroCard = ({ hero, onButtonClicked }:{hero:Hero, onButtonClicked: number => void }) => (
  <HeroCardWrapper>
    <Link to={`/detail/${hero.id}`}>
      <h3>{hero.name}</h3>
      <img src={hero.image} alt="HeroImage" />
      <h5>{hero.true_name}</h5>
    </Link>
      <button onClick={() => onButtonClicked(hero.id)}>Add to my heroes</button>
  </HeroCardWrapper>
);

export default HeroCard;
