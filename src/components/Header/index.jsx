import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, Title, HeaderButton } from "./styles";
function Header() {
  return (
    <HeaderContainer>
      <HeaderButton to="/">Tienda</HeaderButton>
      <Title>HULK STORE</Title>
      <HeaderButton to="/kardex">Kardex</HeaderButton>
    </HeaderContainer>
  );
}

export default Header;
