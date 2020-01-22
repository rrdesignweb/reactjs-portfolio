import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  ContactDetails,
  ProfileImg,
  SpanPrimary,
  SpanHighlight
} from "./sidebar.styles";
import Me from "../../assets/me.jpg";

const Sidebar = () => {
  const MenuStyles = {
    bmBurgerButton: {
      position: "fixed",
      width: "20px",
      height: "12px",
      left: "35px",
      top: "35px"
    },
    bmBurgerBars: {
      background: "rgba(255, 255, 255, 0.9)"
    },
    bmBurgerBarsHover: {
      background: "#aaaaaa"
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
      top: "29px",
      left: "255px"
    },
    bmCross: {
      background: "#ccc"
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%"
    },
    bmMenu: {
      background: "rgba(255, 255, 255, 1)",
      padding: "2.5em 1em 2.5em 1em",
      fontSize: "1.45em",
      color: "#000",
      textDecoration: "none"
    },
    bmMorphShape: {
      fill: "#cccccc"
    },
    bmItemList: {
      color: "#ccc",
      padding: "0.8em"
    },
    bmItem: {
      display: "block",
      textAlign: "left",
      padding: "10px 0",
      textDecoration: "none",
      color: "#333333"
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.5)"
    }
  };

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
