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
import {
  iNotionExperience,
  iNotionLink,
} from "../util/notion/filterNotionData";
import * as IoIcons from "react-icons/io";
import CardLink from "./CardLink";
import IconLink from "./IconLink";

interface iHeroView {
  age: number | String;
  links: iNotionLink[];
  experiences: iNotionExperience[];
}

interface iDynamicIcon {
  name: string;
}
const DynamicIcon = ({ name }: iDynamicIcon) => {
  // @ts-ignore
  const IconComponent = IoIcons[name];
  return <IconComponent />;
};

const HeroView = ({ age, links, experiences }: iHeroView) => {
  const { toggleColorMode } = useColorMode();
  const iconLinks = links.filter((link) => !!link.icon);
  const cardLinks = links.filter((link) => !link.icon);
  const descriptor =
    experiences && experiences.find((el) => el.type === "Descriptor");
  return (
    <Center
      bgImage={`linear-gradient(to left top, rgba(26, 81, 64, 0.4), rgba(9, 35, 62, 0.4)),
      url('${bgImage.src}')`}
      backgroundSize="cover"
      backgroundPosition={"center"}
    >
      <Stack mt="18rem" spacing="5">
        <Heading as="h1" color={"gray.200"} textAlign="center" py={5}>
          Hey, I'm Ankur!
        </Heading>
        <Stack>
          <Text
            as="h3"
            fontSize="2xl"
            color="gray.300"
            textAlign={"center"}
            fontWeight={500}
          >
            {`I'm a ${age}-year-old who loves learning and building things`}
          </Text>
          {descriptor && (
            <Text as="h3" fontSize="lg" color="gray.300" textAlign={"center"}>
              {descriptor.description}
            </Text>
          )}
        </Stack>
        <Stack direction="row" alignSelf={"center"} spacing="5">
          {iconLinks.map((link, index) => {
            return (
              <IconLink
                href={link.link!}
                key={index}
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

export default HeroView;
