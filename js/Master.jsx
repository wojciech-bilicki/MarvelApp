// @flow
import React from 'react';
import styled from 'styled-components';

import HeroCard from './HeroCard';
import MyHeroes from './MyHeroes';
import type { Hero } from './types';
import {
  fetchMasterData,
  addFavouriteHero,
  deleteFavouriteHero,
} from './api';

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 7;
`;

const MasterWrapper = styled.div`display: flex;`;

type Props = {
  searchTerm: string,
};

type State = {
  heroes: Array<Hero>,
  favouriteHeroes: Array<Hero>,
  loading: boolean,
};

class Master extends React.Component<Props, State> {
  state = {
    heroes: [],
    favouriteHeroes: [],
    loading: true,
  };

  componentDidMount() {
    fetchMasterData().then(masterData =>
      this.setState({
        heroes: masterData.heroes,
        favouriteHeroes: masterData.favouriteHeroes,
        loading: false
      })
    )
  }

  onAddToFavouriteRequested = (heroId: number) => {
     addFavouriteHero(heroId).then(favouriteHeroes =>
      this.setState({
        favouriteHeroes
      })
    )
  };

  onDeleteHero = (heroId: number) => {
    deleteFavouriteHero(heroId).then(favouriteHeroes => {
      this.setState({
        favouriteHeroes
      })
    })
  }

  render() {
    const { loading, heroes, favouriteHeroes } = this.state;
    const { searchTerm } = this.props;
    return (
      <MasterWrapper>
        {loading && <h2>Dude, wft I am loading!</h2>}
        {!loading && (
          <CardListWrapper>
            {heroes
              .filter(hero => {
                if (!searchTerm || searchTerm === '') {
                  return true;
                }
                return (
                  `${hero.name} ${hero.true_name}`
                    .toUpperCase()
                    .indexOf(searchTerm.toUpperCase()) >= 0
                );
              })
              .map(hero => (
                <HeroCard
                  hero={hero}
                  key={hero.id}
                  onButtonClicked={this.onAddToFavouriteRequested}
                />
              ))}
          </CardListWrapper>
        )}
        <MyHeroes favouriteHeroes={favouriteHeroes} onDelete={this.onDeleteHero}/>
      </MasterWrapper>
    );
  }
}

export default Master;
