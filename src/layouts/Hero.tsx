import React from "react";
import { Center, Heading, Text, Stack } from "@chakra-ui/react";
import { iNotionExperience, iNotionLink } from "../util/notion";
import * as IoIcons from "react-icons/io";
import CardLink from "../components/CardLink";
import IconLink from "../components/IconLink";
import ThemeIcon from "../components/ThemeIcon";

const DynamicIcon = ({ name }: { name: string }): JSX.Element => {
  // @ts-ignore
  const IconComponent = IoIcons[name];
  return <IconComponent />;
};

interface iHero {
  age: number | String;
  links: iNotionLink[];
  experiences: iNotionExperience[];
}
const Hero = ({ age, links, experiences }: iHero) => {
  const iconLinks = links.filter((link) => !!link.icon);
  const cardLinks = links.filter((link) => !link.icon);
  const descriptor =
    experiences && experiences.find((el) => el.type === "Descriptor");
  return (
    <Center
      bgImage={`linear-gradient(to left top, rgba(26, 81, 64, 0.4), rgba(9, 35, 62, 0.4)),
      url('/images/background-image.jpeg')`}
      backgroundSize="cover"
      backgroundPosition={"center"}
    >
      <Stack mt="18rem" spacing="5">
        <Heading as="h1" color="gray.200" textAlign="center" py={5}>
          Hey, I&#39;m Ankur!
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
          <ThemeIcon />
        </Center>
      </Stack>
    </Center>
  );
};

export default Hero;
