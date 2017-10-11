import React from "react";
import styled from 'styled-components';
import {getHeroData, getComics} from './api';
import ComicsThumb from './ComicsThumb';

const HeroDetailWrapper = styled.div`
  display: grid;
  margin: 32px;
  grid-template-column: 70% 30%;
  grid-column-gap: 32px;

  div {
    background-color: white;
  }
  > div:nth-of-type(1) {
    grid-column: 1;
  }
  > div:nth-of-type(2){
    grid-column: 2;
    margin-right: 32px;
    padding: 16px;
  }
  header {
    display: flex

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

const ComicsWrapper = styled.div`
  display: flex;
`;

class Detail extends React.Component {

  state = {
    hero: {},
    comicsArray: []
  }

  componentDidMount() {
    getHeroData(this.props.match.params.heroId).then(hero => {
      this.setState({hero})
      getComics(hero.comics).then(comicsArray => this.setState({comicsArray}))
      }
    )
  }

  render() {
    const {hero, comicsArray} = this.state;
    return (
      <HeroDetailWrapper>
        <div>
          <header>
            <img src={hero.image} />
            <DescriptionWrapper>
              <h1>{hero.name}</h1>
              <p>{hero.description}</p>
            </DescriptionWrapper>
          </header>
          <ComicsWrapper>
            {comicsArray.map(comics => <ComicsThumb comics={comics} key={comics.id}/>)}
          </ComicsWrapper>
        </div>
      </HeroDetailWrapper>
    )
  }
}

export default Detail;
