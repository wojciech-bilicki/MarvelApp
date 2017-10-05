// @flow
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

type State = {
  searchTerm: string
};

class TopBar extends React.Component<null, State>{

  state = {
    searchTerm: ''
  }

  onInputChange = (event: {target: HTMLInputElement}) => {
    this.setState({ searchTerm: event.target.value })
  };

  render() {
    return (
      <TopBarWrapper bgColor="#f11e22">
        <Logo src={logo} alt="Logo" />
        <span>Super Marvel Team</span>
        <SearchInputWrapper>
          <input value={this.state.searchTerm} onChange={this.onInputChange} />
          <Link to={`/search/${this.state.searchTerm}`}>
            <button>Poszukaj2</button>
          </Link>
        </SearchInputWrapper>
      </TopBarWrapper>
    );
  }
}

export default TopBar;
