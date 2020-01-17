import styled from "styled-components";
import Colors from "../../constants/Colors";

export const SpanPrimary = styled.span`
    color: ${Colors.primaryGrey};
`;

export const SpanHighlight = styled.span`
    color: ${Colors.highlightColor};
`;

export const ContactDetails = styled.div`
  font-size: 0.9em;
  line-height: 1.5em;
  color: ${Colors.secondaryGrey};
`;

export const ProfileImg = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-left: 33px;
  margin-bottom: 33px;
`;

export const Hr = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
`;