import React from "react";

import { LinkStyle } from "./link-item.styles";

//Incase more than one link
const LinkItem = ({ url, linkName }) => {
  return <LinkStyle target="_blank" rel="noreferrer" href={url}>{linkName}</LinkStyle>
};

export default LinkItem;
