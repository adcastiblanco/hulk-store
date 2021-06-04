import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  background-color: #172983;
`;

export const Title = styled.h1`
  color: white;
`;

export const HeaderButton = styled(Link)`
  color: black;
  background-color: white;
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid black;
  transition: 0.3s;
  &:hover {
    background: lightgray;
  }
`;
