import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const ThemeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      fontSize={"3xl"}
      variant="ghost"
      colorScheme={"whiteAlpha"}
      color="gray.200"
      aria-label="toggle theme"
      onClick={() => toggleColorMode()}
      icon={useColorModeValue(<IoMdMoon />, <IoMdSunny />)}
    />
  );
};
export default ThemeIcon;
