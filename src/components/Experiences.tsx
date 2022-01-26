import React from "react";
import {
  iNotionExperience,
  iNotionSkill,
} from "../util/notion/filterNotionData";
import {
  Center,
  Heading,
  Text,
  Stack,
  useColorMode,
  Box,
  IconButton,
  useColorModeValue,
  HStack,
  Flex,
} from "@chakra-ui/react";
export interface IExperiences {
  skills: iNotionSkill[];
  experiences: iNotionExperience[];
}

const getSkillsData = (skills: iNotionSkill[]) => {
  const allSkills = new Map<String, String[]>();
  skills.forEach((el) => {
    allSkills.set(el.type, [...(allSkills.get(el.type) ?? []), el.name]);
  });
  return Array.from(allSkills.entries());
};

const Experiences = ({ skills, experiences }: IExperiences) => {
  const aboutMe =
    experiences && experiences.find((el) => el.type === "About Me");
  const allSkills = getSkillsData(skills);
  return (
    <Stack spacing={10} p={14}>
      <Stack spacing={5}>
        <Heading
          as="h4"
          bgGradient="linear(to-r,#2a54f5,#33e5bb);)"
          bgClip="text"
          textTransform="uppercase"
          fontSize="1rem"
          letterSpacing={1}
        >
          About Me
        </Heading>
        {aboutMe && <Text>{aboutMe.description}</Text>}
        {allSkills.map(([type, skillNames], index) => {
          return (
            <Box as="span" key={index} w="full">
              <Text mr={5} fontWeight="semibold" as="span">
                {type}
              </Text>
              {skillNames.map((skillName, index) => {
                return (
                  <>
                    <Text
                      as="span"
                      bgGradient="linear(0deg,#2a54f5,#31a6ce);)"
                      bgClip="text"
                      fontWeight={400}
                    >
                      {skillName}
                    </Text>
                    {index !== skillNames.length - 1 && (
                      <Text
                        as="span"
                        mx={2}
                        fontSize={10}
                        bgGradient="linear(to-r,#2a54f5,#31a6ce);)"
                        bgClip="text"
                      >
                        &#9679;
                      </Text>
                    )}
                  </>
                );
              })}
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Experiences;
