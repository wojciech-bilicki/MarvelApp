/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Master from './Master';
import Detail from './Detail';
import TopBar from './TopBar';
import background from '../assets/background.png';

import data from '../data.json';

const Background = styled.img`
  min-height: 100%;
  min-width: 1024px;

  width: 100%;
  height: auto;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const App = () =>
  <BrowserRouter>
    <div>
      <TopBar />
      <Background src={background} />
      <Switch>
        <Route
          exact
          path="/"
          component={props => <Master heroes={data.heroes} />}
        />
        <Route
          exact
          path="/search/:searchTerm?"
          component={props =>
            <Master
              heroes={data.heroes}
              searchTerm={props.match.params.searchTerm}
            />}
        />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  </BrowserRouter>;

ReactDOM.render(React.createElement(App), document.getElementById('app'));
