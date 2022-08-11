//React + Pkgs
import styled, { css } from "styled-components"

//Styles
import { theme } from "../../styles/global";

//Mixins
import { remCalc } from "../../styles/mixins";

const h1 = css`
  ${remCalc(34)}
`;

const h2 = css`
    ${remCalc(30)};
    text-align: center;
    color: ${theme.highlightColor}; 
    text-transform: uppercase;
    font-weight: 300;
    line-height: 1;
    margin-bottom: 25px;
    padding: 20px 0;
`;

const h3 = css`
  ${remCalc(23)}
`;

//Default
export const StyledHeading = styled.h1`
  ${({ level }) => (level === "h1" && h1)}
  ${({ level }) => (level === "h2" && h2)}
  ${({ level }) => (level === "h3" && h3)}
`;