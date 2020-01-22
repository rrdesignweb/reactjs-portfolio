import React from "react";
import logo from "../../assets/logo.png";
import { AppHeader, AppLogo } from "./header.styles";

const Header = () => {
  return (
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
    </AppHeader>
  );
};

export default Header;
