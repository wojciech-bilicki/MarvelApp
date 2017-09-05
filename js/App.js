/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import reducers from './redux/store';
import { createStore, compose } from 'redux';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Master from './Master';
import Detail from './Detail';
import TopBar from './TopBar';
import Comics from './Comics';
import background from '../assets/background.png';

const Background = styled.img`
  min-height: 100%;
  min-width: 1024px;

  width: 100%;
  height: auto;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
`;

const store = createStore(
  reducers,
  compose(
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <TopBar />
        <Background src={background} />
        <Switch>
          <Route exact path="/" component={props => <Master />} />
          <Route
            exact
            path="/search/:searchTerm?"
            component={props =>
              <Master searchTerm={props.match.params.searchTerm} />}
          />
          <Route path="/detail/:heroId" component={Detail} />
          <Route path="/comics/:comicsId" component={Comics} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>;

export default App;
