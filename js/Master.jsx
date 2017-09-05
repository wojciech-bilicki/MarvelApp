// @flow
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import type { Hero } from './types';

import HeroCard from './HeroCard';
import MyHeroes from './MyHeroes';
import { fetchMasterData, addFavouriteHero, deleteFavouriteHero } from './api';

const MasterWrapper = styled.div`display: flex;`;

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 7;
`;

type State = {
  heroes: Array<Hero>,
  favouriteHeroes: Array<Hero>
};
type Props = {
  searchTerm: string
};

class Master extends React.Component<Props, State> {
  state = {
    heroes: [],
    favouriteHeroes: []
  };

  componentDidMount() {
    fetchMasterData().then(masterData =>
      this.setState({
        heroes: masterData.heroes,
        favouriteHeroes: masterData.favouriteHeroes
      })
    );
  }

  onAddToFavouritesRequested = (heroId: number) => {
    addFavouriteHero(heroId).then(favouriteHeroes =>
      this.setState({ favouriteHeroes })
    );
  };

  onDeleteHero = (heroId: number) => {
    deleteFavouriteHero(heroId).then(favouriteHeroes => {
      this.setState({ favouriteHeroes });
    });
  };

  render() {
    return (
      <MasterWrapper>
        <CardListWrapper>
          {this.state.heroes
            .filter(hero => {
              if (!this.props.searchTerm) {
                return true;
              }
              return (
                `${hero.name} ${hero.true_name}`
                  .toUpperCase()
                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0
              );
            })
            .map(hero =>
              <HeroCard
                hero={hero}
                key={hero.id}
                onAddToFavouritesRequested={this.onAddToFavouritesRequested}
              />
            )}
        </CardListWrapper>
        <MyHeroes
          favouriteHeroes={this.state.favouriteHeroes}
          onDelete={this.onDeleteHero}
        />
      </MasterWrapper>
    );
  }
}

export default Master;
