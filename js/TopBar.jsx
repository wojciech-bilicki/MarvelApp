import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.header`
  width: 100%;
  background-color: #f11e22;
  display: flex;
  justify-content: center;
  span {
    color: white;
    font-size: 24px;
  }
`;

const TopBar = () =>
  <TopBarWrapper>
    <span>Super Hero Team</span>
  </TopBarWrapper>;

export default TopBar;
