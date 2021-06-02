import React from "react";

import LogoTodo1 from "../../assets/images/Logo-todo1.webp";
import LogoVass from "../../assets/images/logo-vass-blanco.png";

import { FooterContainer, Image } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <Image src={LogoTodo1} alt="Logo Todo1" />
      <Image src={LogoVass} alt="Logo Vass" />
    </FooterContainer>
  );
}

export default Footer;
