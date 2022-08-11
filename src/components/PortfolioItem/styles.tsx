import styled, { keyframes } from "styled-components"

//Styles
import { device, remCalc, layer } from "../../styles/mixins";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const StyledPortfolioItem = styled.div`
    height: 100%;
    padding: 45px;
    @media ${device.medium} { 
        padding: 85px 150px;
    }
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    color: #fff;
    background: rgba(254, 254, 254, 1);
    background: linear-gradient(
        to bottom,
        rgba(237, 237, 237, 1) 0%,
        rgba(246, 246, 246, 1) 10%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#ffffff', GradientType=0 );
    
    animation: ${fadeIn} 1s ease-in-out;
`;

export const StyledPortfolioTitle = styled.h3`
    line-height: 1.5em;
    padding-bottom: 10px;
    color: ${props => props.theme.highlightColor}; 
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.lightGrey}; 
    text-transform: uppercase;
`;

export const StyledPortfolioDescription = styled.p`
    ${remCalc(18)};
    line-height: 1.8em;
    color: ${props => props.theme.primaryDark}; 
    text-align: left;
    padding: 10px 0;
`;

export const StyledPortfolioDutiesContainer = styled.div`
  text-align: left;
`;

export const StyledPortfolioDutiesItem = styled.div`
    display: flex;
    padding: 10px 0px;
    margin-left: 15px;
    color: ${props => props.theme.secondaryGrey}; 
    text-transform: none;
    list-style: none;
    border-top: 1px solid ${props => props.theme.lightGrey}; 
    ${remCalc(14)};
    &:first-child {
        border-top: none;
    }
`;

export const StyledPortfolioDutiesIcon = styled.div`
    margin-right: 15px;
`;

export const StyledPortfolioDutiesItemText = styled.div``;

export const StyledPortfolioList = styled.ul`
    justify-content: flex-start;
    padding-top: 5px;
`;

export const StyledPortfolioListItem = styled.ul`
    list-style: none;
    background: ${props => props.theme.lightGrey}; 
    color: ${props => props.theme.primaryGrey}; 
    float: left;
    font-weight: 400;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    text-align: left;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 0.375rem 0.75rem;
    ${remCalc(12)};
    line-height: 1.5;
    border-radius: 0.25rem;
`;

export const StyledPortfolioParagraph = styled.p`
    text-align: left;
    text-transform: none;
    color: ${props => props.theme.pGrey}; 
    line-height: 1.7em;
    padding-top: 10px;
    ${remCalc(18)};
`;

export const StyledPortfolioImgWrapper = styled.figure``;

export const StyledPortfolioBgImage = styled.div`
    position: relative;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: 56.25%;
    margin-bottom: 30px;
    background-color: #eee;
    z-index: ${layer["background-img"]};
`;

export const StyledPortfolioItemFooter = styled.div`
    padding-top: 20px;  
`;

export const StyledPortfolioItemFooterLinkWrapper = styled.div`
    width: 100%;
    justify-content: flex-start;
    display: flex;
    padding-top: 20px;
`;

export const StyledPortfolioItemFooterLinkContainer = styled.div``;

export const StyledPortfolioItemFooterLink = styled.a`
    color: ${props => props.theme.linkColor}; 
    ${remCalc(14)};
    text-transform: uppercase;
    text-decoration: none;
    list-style: none;
    &:hover {
        color:  ${props => props.theme.linkHover}; 
    }
    &::after {
        content: "/";
        padding-left: 5px;
        padding-right: 5px;
    }
    &:last-child {
        &:after {
            content: "";
        }
    }
`;