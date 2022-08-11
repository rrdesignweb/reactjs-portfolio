import styled from "styled-components";
import { remCalc } from "../../styles/mixins";

export const StyledHeader = styled.header`
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${remCalc(14)};
    background: linear-gradient(to bottom, #efefef 0%, white 50%,#fff 100%);
    color: white;
    border-bottom: 1px solid #eee;
`;

export const StyledLogo = styled.img`
    width: 55vmin;
    height: auto;
    pointer-events: none;
`;