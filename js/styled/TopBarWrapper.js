import styled from "styled-components";

const TopBarWrapper = styled.header`
  width: 100%;
  background-color: ${props => props.bgColor || "red"};
  display: flex;
  justify-content: center;

  span {
    color: white;
    font-size: 24px;
  }
`;

export default TopBarWrapper;
