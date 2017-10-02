import React from "react";
import styled from "styled-components";
import { arrayOf, string } from "prop-types";
import HeroCard from "./HeroCard";

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Master = props => (
  <div>
    <CardListWrapper>
      {props.heroes
        .filter(hero => {
          if (!props.searchTerm || props.searchTerm === "") {
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
  </div>
);

Master.propTypes = {
  heroes: arrayOf(HeroCard.propTypes.hero).isRequired,
  searchTerm: string
};

Master.defaultProps = {
  searchTerm: ""
};

export default Master;
