//React + Pkgs
import React from "react";

//Assets
import Logo from "../../assets/logo.svg";

//Styles
import { StyledScreenReaderOnly } from "../../styles/mixins";
import { StyledHeader, StyledLogo } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledScreenReaderOnly as={"h1"}>Rowan Richardson - Frontend Developer from Melbourne</StyledScreenReaderOnly>
      <StyledLogo src={Logo} alt="Portfolio Logo" />
    </StyledHeader>
  );
};

export default Header;
