import styled from "styled-components";
import Colors from "../../constants/Colors";

export const LinkStyle = styled.a`
  color: ${Colors.linkColor};
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  &:hover {
    color: ${Colors.linkHover}
  }
  &::after {
    content: "/";
    padding-left: 5px;
    padding-right: 5px;
  }
  &:last-child::after {
    content: "";
  }
`;