import React from "react";
import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { iNotionLink } from "../util/notion/filterNotionData";

interface iCardLink {
  link: iNotionLink;
}
const CardLink = ({ link }: iCardLink) => {
  return (
    <Button
      as="a"
      href={link.link}
      bgColor={useColorModeValue("#f5f5f5", "#1f1f1f")}
      px="15px"
      _hover={{ boxShadow: "3xl" }}
    >
      <Text bgGradient="linear(to-r,#2a54f5,#33e5bb);)" bgClip="text">
        {link.name}
      </Text>
    </Button>
  );
};

export default CardLink;
