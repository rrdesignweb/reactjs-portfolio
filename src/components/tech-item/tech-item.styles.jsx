import styled from "styled-components";
import Colors from "../../constants/Colors";

export const TechStyle = styled.li`
  list-style: none;
  font-family: "Pathway Gothic One", sans-serif !important;
  background: ${Colors.lightGrey};
  color: ${Colors.primaryGrey};
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
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`;