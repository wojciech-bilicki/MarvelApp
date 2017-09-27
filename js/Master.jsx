import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const Master = () => (
  <div>
    <TopBar />
    <div>Content</div>
    <Link to="/detail">Go to details</Link>
  </div>
);

export default Master;
