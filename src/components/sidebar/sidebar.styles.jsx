import styled from "styled-components";
import Colors from "../../constants/Colors";

export const SpanPrimary = styled.span`
  color: ${Colors.primaryGrey};
`;

export const SpanHighlight = styled.span`
  color: ${Colors.highlightColor};
`;

export const ContactDetails = styled.div`
  font-size: 0.9em;
  line-height: 1.5em;
  color: ${Colors.secondaryGrey};
`;

export const ProfileImg = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-left: 33px;
  margin-bottom: 33px;
`;

export const Hr = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MenuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "12px",
    left: "35px",
    top: "35px"
  },
  bmBurgerBars: {
    background: `${Colors.secondaryGrey}`
  },
  bmBurgerBarsHover: {
    background: `${Colors.secondaryGrey}`
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    top: "29px",
    left: "255px"
  },
  bmCross: {
    background: `${Colors.solidGrey}`
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: `${Colors.white}`,
    padding: "2.5em 1em 2.5em 1em",
    fontSize: "1.45em",
    color: `${Colors.black}`,
    textDecoration: "none"
  },
  bmMorphShape: {
    fill: `${Colors.solidGrey}`
  },
  bmItemList: {
    color: `${Colors.solidGrey}`,
    padding: "0.8em"
  },
  bmItem: {
    display: "block",
    textAlign: "left",
    padding: "10px 0",
    textDecoration: "none",
    color: `${Colors.primaryGrey}`
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)"
  }
};
