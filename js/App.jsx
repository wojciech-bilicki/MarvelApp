import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Master from "./Master";
import Detail from "./Detail";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Master} />
      <Route path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(React.createElement(App), document.getElementById("app"));
