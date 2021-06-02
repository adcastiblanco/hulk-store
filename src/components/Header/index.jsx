import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./styles";
function Header() {
  return (
    <HeaderContainer>
      <Link>Tienda</Link>
      <h1>HULK STORE</h1>
      <Link>Kardex</Link>
    </HeaderContainer>
  );
}

export default Header;
