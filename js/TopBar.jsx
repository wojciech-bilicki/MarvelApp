import React from "react";
import { HeroCard as MarvelCard, TopBarWrapper } from "./styled";

const TopBar = () => (
  <TopBarWrapper bgColor="green">
    <span>
      Super Marvel Team<MarvelCard />
    </span>
  </TopBarWrapper>
);

export default TopBar;
