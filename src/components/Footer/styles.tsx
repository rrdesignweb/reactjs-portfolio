import styled from "styled-components";
import { remCalc, device } from "../../styles/mixins";

export const StyledFooter = styled.footer`
    width: 100%;
    color: ${props => props.theme.primaryGrey}; 
    padding: 15px 0px 20px 0px;
    border-top: 1px solid  ${props => props.theme.lightGrey}; 
    display: flex;
    align-items: center;
    justify-content: center;
    ${remCalc(12)};
    @media ${device.medium} { 
        ${remCalc(14)};
    }
`;

export const StyledFooterCopyright = styled.span`
    padding-right: 2px;
    @media ${device.medium} { 
        padding-right: 5px;
    }
`;

export const StyledFooterDivider = styled.span`
    color: ${props => props.theme.linkColor}; 
    padding-left: 2px;
    padding-right: 2px;
    @media ${device.medium} { 
        padding-left: 5px;
        padding-right: 5px;
    }
`;

