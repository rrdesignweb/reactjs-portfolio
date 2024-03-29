import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledSpinnerContainer = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: ${spin} 2s ease-in-out infinite;
`;



