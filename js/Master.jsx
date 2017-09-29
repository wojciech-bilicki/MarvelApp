import React from "react";
import styled from "styled-components";
import { arrayOf } from "prop-types";
import HeroCard from "./HeroCard";

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Master = props => (
  <div>
    <CardListWrapper>
      {props.heroes.map(hero => (
        <HeroCard hero={hero} key={hero.id} label={Math.random()} />
      ))}
    </CardListWrapper>
  </div>
);

Master.propTypes = {
  heroes: arrayOf(HeroCard.propTypes.hero).isRequired
};

export default Master;
