import React from "react";
import { HeroCard as MarvelCard, TopBarWrapper } from "./styled";
import logo from "../assets/Marvel-Logo.png";

const TopBar = () => (
  <TopBarWrapper bgColor="green">
    <span>
      Super Marvel Team<MarvelCard />
    </span>
    <img src={logo} alt="Logo" />
  </TopBarWrapper>
);

export default TopBar;
