import React from "react";
import ReactDOM from "react-dom";

import TopBar from "./TopBar";

const App = () => (
  <div>
    <TopBar />
    <div>Content</div>
  </div>
);

ReactDOM.render(React.createElement(App), document.getElementById("app"));
