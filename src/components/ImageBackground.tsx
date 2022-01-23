import React from "react";
import {
  Center,
  Heading,
  Text,
  Stack,
  useColorMode,
  Box,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import bgImage from "../public/background-image.jpeg";
import { iNotionLink } from "../util/notion/filterNotionData";
import * as IoIcons from "react-icons/io";
import CardLink from "./CardLink";

interface iImageBackground {
  age: number | String;
  links: iNotionLink[];
}

interface iDynamicIcon {
  name: string;
}
const DynamicIcon = ({ name }: iDynamicIcon) => {
  // @ts-ignore
  const IconComponent = IoIcons[name];
  return <IconComponent />;
};

const ImageBackground = ({ age, links }: iImageBackground) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconLinks = links.filter((link) => !!link.icon);
  const cardLinks = links.filter((link) => !link.icon);
  return (
    <Center
      bgImage={`linear-gradient(to left top, rgba(26, 81, 64, 0.4), rgba(9, 35, 62, 0.4)),
      url('${bgImage.src}')`}
      backgroundSize="cover"
      backgroundPosition={"center"}
    >
      <Stack mt={40} spacing="5">
        <Heading as="h1" color={"gray.200"} textAlign="center" py={5}>
          Hey, I'm Ankur!
        </Heading>
        <Text as="h3" fontSize="xl" color="gray.300" textAlign={"center"}>
          {`I'm a ${age}-year-old who loves learning and building things`}
        </Text>
        <Stack direction="row" alignSelf={"center"} spacing="5">
          {iconLinks.map((link, index) => {
            return (
              <IconButton
                as="a"
                href={link.link}
                fontSize="4xl"
                key={index}
                variant="ghost"
                color="gray.200"
                aria-label="icon"
                icon={<DynamicIcon name={link.icon!} />}
              />
            );
          })}
        </Stack>
        <Stack direction="row" alignSelf={"center"} spacing="5">
          {cardLinks.map((link, index) => {
            return <CardLink link={link} key={index} />;
          })}
        </Stack>
        <Center alignItems="center">
          <IconButton
            fontSize={"3xl"}
            variant="ghost"
            colorScheme={"whiteAlpha"}
            color="gray.200"
            aria-label="toggle theme"
            onClick={() => toggleColorMode()}
            icon={useColorModeValue(
              <IoIcons.IoMdMoon />,
              <IoIcons.IoMdSunny />
            )}
          />
        </Center>
      </Stack>
    </Center>
  );
};

export default ImageBackground;
