// @flow
import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { TopBarWrapper } from './styled';
import logo from '../assets/Marvel-Logo.png';
import {setSearchTerm} from './redux/actionCreators';

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

const TopBar = ({
  searchTerm,
  handleInputChange,
}:{
  searchTerm: string,
  handleInputChange: Function,
}) => (
  <TopBarWrapper bgColor="#f11e22">
    <Logo src={logo} alt="Logo" />
    <span>Super Marvel Team</span>
    <SearchInputWrapper>
      <input value={searchTerm} onChange={handleInputChange} />
      <Link to={`/search/${searchTerm}`}>
        <button>Poszukaj2</button>
      </Link>
    </SearchInputWrapper>
  </TopBarWrapper>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = dispatch => ({
  handleInputChange: event => {
    dispatch(setSearchTerm(event.target.value));
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
