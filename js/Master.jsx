// @flow
import React from "react";
import styled from "styled-components";
import axios from 'axios';

import HeroCard from "./HeroCard";
import type {Hero} from './types';


const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  searchTerm: string,
}

type State = {
  heroes: Array<Hero>,
  loading: boolean
}

class Master extends React.Component<Props, State> {

  state = {
    heroes: [],
    loading: true
  }

  componentDidMount() {
    axios
      .get('http://localhost:8001/api/v1/heroes')
      .then(heroes => this.setState({heroes: heroes.data, loading: false}));
  }

  render() {
  const { loading, heroes} = this.state;
  const { searchTerm } = this.props;
  return (<div>
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
        .map(hero => <HeroCard hero={hero} key={hero.id} />)}
    </CardListWrapper>}
  </div>)}
};

export default Master;
