// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/Marvel-Logo.png';

const TopBarWrapper = styled.header`
  width: 100%;
  background-color: #f11e22;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: white;
    font-size: 36px;
    font-weight: bold;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 80px;
  margin-left: 32px;
`;

const SearchInput = styled.div`
  margin-right: 32px;
  input {
    margin-right: 8px;
  }
`;

type State = {
  searchTerm: string
};

class TopBar extends React.Component<null, State> {
  state = {
    searchTerm: ''
  };

  onInputChange = (event: KeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <TopBarWrapper>
        <Logo src={`${logo}`} alt="Logo" />
        <span>Super Marvel Teams</span>
        <SearchInput>
          <input value={this.state.searchTerm} onChange={this.onInputChange} />
          <Link to={`/search/${this.state.searchTerm}`}>
            <button>search hero</button>
          </Link>
        </SearchInput>
      </TopBarWrapper>
    );
  }
}

export default TopBar;
