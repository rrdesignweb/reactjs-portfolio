import styled from "styled-components"

import { layer, remCalc } from "../../styles/mixins"

export const StyledSocialIcons = styled.div`
    position: fixed;
    right: 20px;
    top: 26px;
    z-index: ${layer["top-nav-bar-icons"]};
`;

export const StyledSocialIconsList = styled.ul`
    display: inline;
`
export const StyledSocialIconsListItem = styled.li`
    display: inline;
    padding-right: 0.2rem;
`;

export const StyledSocialIconsLink = styled.a`
    color: ${props => props.theme.secondaryGrey}; 
    display: inline;
    padding-right: 1rem;
    ${remCalc(30)};
    &:hover {
        color: ${props => props.theme.highlightColor}; 
    }
`;