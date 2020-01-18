import styled from "styled-components";
import Colors from "../../constants/Colors";

export const ContentContainer = styled.div`
  height: 100%;
  padding: 85px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  color: ${Colors.white};
  background: rgba(254, 254, 254, 1);
  text-transform: uppercase;
  padding-top: 20px;
`;

export const ContentFooter = styled.div`
  padding-top: 20px;
`;

export const SpanPrimary = styled.span`
  color: ${Colors.primaryGrey};
`;

export const TechContainer = styled.ul`
  justify-content: flex-start;
`;

export const ContentTitle = styled.div`
  font-size: 2em;
  line-height: 1.5em;
  padding-bottom: 10px;
  color: ${Colors.highlightColor};
  text-align: left;
  border-bottom: 1px solid #eee;
`;

export const ContentSubTitle = styled.div`
  font-size: 1.15em;
  line-height: 1.8em;
  color: ${Colors.black};
  text-align: left;
`;

export const Paragraph = styled.p`
  text-align: left;
  text-transform: none;
  color: ${Colors.pGrey};
  line-height: 1.8em;
  padding-top: 5px;
`;

export const LinkContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  padding-top: 20px;
`;

export const Image = styled.img`
  width: 80%;
  align-self:center;
`;
