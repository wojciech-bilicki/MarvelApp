import React from "react";
import styled from "styled-components";
import { TopBarWrapper } from "./styled";
import logo from "../assets/Marvel-Logo.png";

const Logo = styled.img`
  width: 200px;
  height: 80px;
  margin-left: 32px;
`;

const SearchInputWrapper = styled.div`
  margin-right: 32px;
  input {
    margin-right: 8px;
  }
`;

const TopBar = () => (
  <TopBarWrapper bgColor="#f11e22">
    <Logo src={`public/${logo}`} alt="Logo" />
    <span>Super Marvel Team</span>
    <SearchInputWrapper>
      <input />
      <button>search</button>
    </SearchInputWrapper>
  </TopBarWrapper>
);

export default TopBar;
