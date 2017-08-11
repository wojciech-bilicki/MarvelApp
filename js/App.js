/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Master from "./Master";
import Detail from "./Detail";

const App = () =>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Master} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  </BrowserRouter>;

ReactDOM.render(React.createElement(App), document.getElementById("app"));
