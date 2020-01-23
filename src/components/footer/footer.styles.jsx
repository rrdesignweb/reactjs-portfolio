import styled from "styled-components";
import Colors from "../../constants/Colors";

export const FooterWrapper = styled.div`
  width: 100%;
  color: ${Colors.primaryGrey};
  padding: 15px 85px 20px 0px;
  @media screen and (max-width: 800px) {
    padding-right: 35px;
  }
  border-top: 1px solid ${Colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Copyright = styled.span`
  font-size: 18px;
  padding-right:5px;
  padding-top: 8px;
  color: ${Colors.primaryGrey};
`;
