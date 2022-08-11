//React + Pkgs
import React from "react";

//Styles
import { StyledFooter, StyledFooterCopyright, StyledFooterDivider } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterCopyright>
        &#169;{" "}Copyright {new Date().getFullYear()}
      </StyledFooterCopyright>
      <StyledFooterDivider>/</StyledFooterDivider> Rowan Richardson
      <StyledFooterDivider>/ </StyledFooterDivider>Frontend Developer
    </StyledFooter>
  );
};

export default Footer;
