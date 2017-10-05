import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Master from "./Master";
import Detail from "./Detail";
import TopBar from "./TopBar";
import background from "../assets/background.png";

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

const App = () => (
  <BrowserRouter>
    <div>
      <TopBar />
      <Background src={background} />
      <Switch>
        <Route
          exact
          path="/"
          component={Master}
        />
        <Route
          exact
          path="/search/:searchTerm?"
          component={props => (
            <Master
              searchTerm={props.match.params.searchTerm} //eslint-disable-line
            />
          )}
        />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
