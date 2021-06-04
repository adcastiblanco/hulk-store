import { Link } from "react-router-dom";
import styled from "styled-components";

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  justify-items: center;
`;

export const CardContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const BuyBotton = styled(Link)`
  background-color: #e71d23;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 5px;
  font-weight: bold;
  margin: 10px 0;
  display: inline-block;
  text-decoration: none;
`;
