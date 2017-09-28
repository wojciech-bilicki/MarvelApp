import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TopBar from "./TopBar";

import background from "../assets/background.png";

const url = `public/${background}`;

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

const Master = () => (
  <div>
    <TopBar />
    <Background src={url} />
    <Link to="/detail">Go to details</Link>
  </div>
);

export default Master;
