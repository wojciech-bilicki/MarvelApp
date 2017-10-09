// @flow
import React from "react";
import styled from "styled-components";
import axios from 'axios';

import HeroCard from "./HeroCard";
import MyHeroes from './MyHeroes';
import type {Hero} from './types';


const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 7;
`;

const MasterWrapper = styled.div`
  display: flex;
`;

type Props = {
  searchTerm: string,
}

type State = {
  heroes: Array<Hero>,
  favouriteHeroes: Array<Hero>,
  loading: boolean
}

class Master extends React.Component<Props, State> {

  state = {
    heroes: [],
    favouriteHeroes: [],
    loading: true
  }

  componentDidMount() {
    axios
      .get('http://localhost:8001/api/v1/heroes')
      .then(heroes => this.setState({heroes: heroes.data, loading: false}));
    axios
      .get('http://localhost:8001/api/v1/heroes/favourites').
      then(favouriteHeroes => this.setState({ favouriteHeroes: favouriteHeroes.data, loading: false }))
  }

  onAddToFavouriteRequested = (heroId: number) => {
    axios.post('http://localhost:8001/api/v1/heroes/favourites',heroId,{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      setTimeout(() => {
        axios
        .get('http://localhost:8001/api/v1/heroes/favourites').
        then(favouriteHeroes => this.setState({ favouriteHeroes: favouriteHeroes.data }))
      }, 3000)
    )
  }

  render() {
  const { loading, heroes, favouriteHeroes} = this.state;
  const { searchTerm } = this.props;
  return (<MasterWrapper>
    {loading && <h2>Dude, wft I am loading!</h2>}
    {!loading && <CardListWrapper>
      {heroes
        .filter(hero => {
          if (!searchTerm || searchTerm === "") {
            return true;
          }
          return (
            `${hero.name} ${hero.true_name}`
              .toUpperCase()
              .indexOf(searchTerm.toUpperCase()) >= 0
          );
        })
        .map(hero => <HeroCard hero={hero} key={hero.id} onButtonClicked={this.onAddToFavouriteRequested}/>)}
    </CardListWrapper>}
    <MyHeroes favouriteHeroes={favouriteHeroes} />
  </MasterWrapper>)}
};

export default Master;
