import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  ContactDetails,
  ProfileImg,
  SpanPrimary,
  SpanHighlight,
  MenuStyles
} from "./sidebar.styles";
import Me from "../../assets/me.jpg";

const Sidebar = () => {
  return (
    <Menu styles={MenuStyles}>
      <ContactDetails>
        <ProfileImg src={Me} alt="Me" />
        <SpanPrimary>CONTACT DETAILS:</SpanPrimary> <br />
        <SpanHighlight>E</SpanHighlight> / RR.DESIGNWEB@GMAIL.COM <br />
        <SpanHighlight>W</SpanHighlight> / RRICHARDSON.INFO <br />
        <SpanHighlight>P</SpanHighlight> / +61 434 401 326 <br />
      </ContactDetails>
    </Menu>
  );
};

export default Sidebar;
