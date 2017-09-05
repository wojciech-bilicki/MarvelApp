import React from 'react';
import styled from 'styled-components';
import { getHeroData, getComics } from './api';
import ComicsThumb from './ComicsThumb';

const HeroDetailsWrapper = styled.div`
  display: grid;
  margin: 32px;
  grid-template-columns: 70% 30%;
  grid-column-gap: 32px;
  div {
    background-color: white;
  }
  > div:nth-of-type(1) {
    grid-column: 1;
  }

  >: nth-of-type(2) {
    grid-column: 2;
    margin-right: 32px;
    padding: 16px;
  }
  header {
    display: flex;

    img {
      height: 200px;
    }
  }
  h3 {
    margin: 8px 0;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;

  p {
    margin-top: 16px;
  }
`;

const ComicsWrapper = styled.div`display: flex;`;

class Detail extends React.Component {
  state = {
    hero: undefined,
    comicsArray: undefined
  };

  componentDidMount = () => {
    getHeroData(this.props.match.params.heroId).then(hero => {
      this.setState({ hero });
      getComics(hero.comics).then(comicsArray => {
        this.setState({ comicsArray });
      });
    });
  };

  render() {
    const { hero, comicsArray } = this.state;
    return (
      <HeroDetailsWrapper>
        <div>
          <header>
            <img src={hero && hero.image} />
            <DescriptionWrapper>
              <h1>
                {hero && hero.name}
              </h1>
              <p>
                {hero && hero.description}
              </p>
            </DescriptionWrapper>
          </header>
          <ComicsWrapper>
            {comicsArray &&
              comicsArray.map(comics => <ComicsThumb comics={comics} />)}
          </ComicsWrapper>
        </div>

        <div>
          <h4>Powers:</h4>
          <ul>
            {hero &&
              hero.powers.map(power =>
                <li>
                  {power}
                </li>
              )}
          </ul>
          <h3>
            True name: {hero && hero.true_name}
          </h3>
          <h3>
            Place of birth: {hero && hero.place_of_birth}
          </h3>
          <h3>
            Citizenship: {hero && hero.citizenship}
          </h3>
        </div>
      </HeroDetailsWrapper>
    );
  }
}

export default Detail;
