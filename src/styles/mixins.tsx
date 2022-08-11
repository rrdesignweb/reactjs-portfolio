//React + Pkgs
import styled from "styled-components";

export const remCalc = (size, base = 16) => `
    font-size: ${size}px; 
    font-size: calc(${size / base} * 1rem);
`

//Media Queries
export const size = {
    xsmall: "0px",
    small: '320px',
    medium: '768px',
    large: '1024px',
    xlarge: '1440px',
}

export const device = {
    xsmall: `(min-width: ${size.xsmall})`,
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    xlarge: `(min-width: ${size.xlarge})`,
};

export const layer = {
    "top-nav-bar-icons": 10,
    "top-nav-bar": 9,
    "background-img": 8
}

//Default Div
export const StyledScreenReaderOnly = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

//Common Styles
export const StyledParagraph = styled.p`
    margin-bottom: 1em;
    color: ${props => props.theme.pGrey};
`;

export const StyledContentBlock = styled.div`
    padding: 20px 45px;
    @media ${device.medium} { 
        padding: 20px 150px;
    }
`;