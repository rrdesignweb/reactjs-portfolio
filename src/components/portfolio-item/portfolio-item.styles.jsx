import styled from "styled-components";
import Colors from "../../constants/Colors";

export const ContentContainer = styled.div`
  height: 100%;
  padding: 85px;
  @media screen and (max-width: 800px) {
    padding: 35px;
  }
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  color: ${Colors.white};
  background: rgba(254, 254, 254, 1);
  background: -moz-linear-gradient(
    top,
    rgba(237, 237, 237, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(237, 237, 237, 1)),
    color-stop(47%, rgba(246, 246, 246, 1)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(237, 237, 237, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(237, 237, 237, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(237, 237, 237, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(237, 237, 237, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#ffffff', GradientType=0 );
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
  padding-top: 5px;
`;

export const DutiesContainer = styled.ul`
  text-align: left;
  padding-top: 20px;
`;

export const DutyItem = styled.li`
  padding: 10px;
  color: ${Colors.secondaryGrey};
  text-transform: none;
  text-transform: none;
  list-style: none;
  border-top: 1px solid ${Colors.lightGrey};
  &:first-child {
    border-top: none;
  }
`;

export const ContentTitle = styled.div`
  font-size: 2.2em;
  line-height: 1.5em;
  padding-bottom: 10px;
  color: ${Colors.highlightColor};
  text-align: left;
  border-bottom: 1px solid ${Colors.lightGrey};
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
  line-height: 1.7em;
  padding-top: 10px;
  font-size: 1.2em;
`;

export const LinkContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  padding-top: 20px;
`;

export const Image = styled.img`
  width: 85%;
  align-self: center;
`;
