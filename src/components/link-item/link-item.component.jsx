import React from "react";

import { LinkStyle } from "./link-item.styles";

const LinkItem = ({ url, linkName }) => {
  return <LinkStyle href={url}>{linkName}</LinkStyle>
};

export default LinkItem;
