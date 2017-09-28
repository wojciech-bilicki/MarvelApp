import styled from "styled-components";

const TopBarWrapper = styled.header`
  width: 100%;
  background-color: ${props => props.bgColor || "red"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

export default TopBarWrapper;
