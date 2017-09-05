// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/Marvel-Logo.png';
import { setSearchTerm } from './redux/actionCreators';

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

const TopBar = ({
  searchTerm,
  handleInputChange
}: {
  searchTerm: string,
  handleInputChange: Function
}) =>
  <TopBarWrapper>
    <Link to="/">
      <Logo src={`${logo}`} alt="Logo" />
    </Link>
    <span>Super Marvel Teams</span>
    <SearchInput>
      <input value={searchTerm} onChange={handleInputChange} />
      <Link to={`/search/${searchTerm}`}>
        <button>search hero</button>
      </Link>
    </SearchInput>
  </TopBarWrapper>;

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: event => {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
