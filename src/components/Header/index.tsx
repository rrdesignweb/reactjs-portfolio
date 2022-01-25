import React from "react";
import Logo from "../../assets/logo.svg";
import "./index.scss";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="sr-only">Rowan Richardson - Frontend Developer from Melbourne</h1>
      <img className="logo" src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
