import styled from "styled-components";
import Colors from "../../constants/Colors";

export const SocialContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 26px;
  z-index: 999;
`;

export const UnorderedList = styled.ul`
  display: inline;
`;

export const List = styled.li`
  display: inline;
  padding-right: 0.2rem;
  a {
    color: ${Colors.secondaryGrey};
    font-size: 26px;
    display: inline;
    padding-right: 1rem;
    font-size: 30px;
    &:hover {
      color: ${Colors.highlightColor};
    }
  }
`;