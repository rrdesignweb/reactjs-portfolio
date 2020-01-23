import React from "react";
import { FooterWrapper, Copyright } from "./footer.styles";

const Footer = () => {
  return <FooterWrapper><Copyright>&#169;</Copyright> Copyright {new Date().getFullYear()} / UI / Digital Design / Front End Developer</FooterWrapper>;
};

export default Footer;
