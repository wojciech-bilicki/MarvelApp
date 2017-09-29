import React from "react";
import styled from "styled-components";
import { string, shape } from "prop-types";

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

const HeroCard = ({ hero }) => (
  <HeroCardWrapper>
    <h4>{hero.name}</h4>
    <img src={`../assets/portraits/${hero.image}`} alt="HeroImage" />
    <h5>{hero.true_name}</h5>
    <button>Add to my heroes</button>
  </HeroCardWrapper>
);

HeroCard.propTypes = {
  hero: shape({
    name: string.isRequired,
    true_name: string.isRequired,
    image: string.isRequired
  }).isRequired
};

export default HeroCard;
