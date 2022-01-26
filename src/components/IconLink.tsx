import React from "react";
import { IconButton } from "@chakra-ui/react";

interface iIconLink {
  icon: JSX.Element;
  href: string;
  [x: string]: any;
}
const IconLink = (props: iIconLink) => {
  return (
    <IconButton
      as="a"
      {...props}
      href={props.href}
      fontSize="4xl"
      variant="ghost"
      color="gray.200"
      aria-label="icon"
      icon={props.icon}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default IconLink;
