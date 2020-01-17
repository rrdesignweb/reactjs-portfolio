import styled from "styled-components";
import Colors from "../../constants/Colors";

export const ContentContainer = styled.div`
  height: 100%;
  padding: 100px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  color: ${Colors.white};
  background: rgba(219, 219, 219, 1);
  background: -moz-linear-gradient(
    -45deg,
    rgba(219, 219, 219, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(219, 219, 219, 1)),
    color-stop(100%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(219, 219, 219, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(219, 219, 219, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(219, 219, 219, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(219, 219, 219, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dbdbdb', endColorstr='#ffffff', GradientType=1 );
  text-transform: uppercase;
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: all 1.9s cubic-bezier(0.22, 0.44, 0, 1);
  transition: all 1.9s cubic-bezier(0.22, 0.44, 0, 1);
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
  width: 93%;
`;
