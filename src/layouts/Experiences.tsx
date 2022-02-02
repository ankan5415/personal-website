import React from "react";
import { iNotionExperience, iNotionSkill } from "../util/notion";
import { Heading, Text, Stack, Box, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import Skills from "@components/Skills";
export interface IExperiences {
  skills: iNotionSkill[];
  experiences: iNotionExperience[];
}

const getExperiencesData = (experiences: iNotionExperience[]) => {
  const res = new Map<String, iNotionExperience[]>();
  experiences.forEach((el) => {
    res.set(el.type, [...(res.get(el.type) ?? []), el]);
  });
  res.delete("Descriptor");
  res.delete("About Me");
  return Array.from(res.entries());
};

const Experiences = ({ skills, experiences }: IExperiences) => {
  const mainTextColor = useColorModeValue("gray.700", "gray.300");
  const aboutMe =
    experiences && experiences.find((el) => el.type === "About Me");
  const filteredExperiences = getExperiencesData(experiences);
  return (
    <Stack
      spacing={10}
      p={14}
      overflowY={{
        base: "auto",
        sm: "auto",
        md: "auto",
        lg: "scroll",
      }}
      h={{
        base: "auto",
        sm: "fit-content",
        md: "fit-content",
        lg: "100vh",
      }}
    >
      <Stack spacing={5}>
        <Heading
          as="h4"
          bgGradient="linear(to-r,#2a54f5,#33e5bb)"
          bgClip="text"
          textTransform="uppercase"
          fontSize={16}
          letterSpacing="wide"
        >
          About Me
        </Heading>
        {aboutMe && <Text color={mainTextColor}>{aboutMe.description}</Text>}
        <Stack>
          <Skills skills={skills} />
        </Stack>
      </Stack>
      {filteredExperiences.map(([type, experiences], i) => {
        return (
          <Stack spacing={5} key={i}>
            <Heading
              as="h4"
              bgGradient="linear(to-r,#2a54f5,#33e5bb)"
              bgClip="text"
              textTransform="uppercase"
              fontSize={16}
              letterSpacing="wide"
            >
              {type}
            </Heading>
            {experiences.map((experience, index) => {
              let experienceDate = moment(experience.start).format("MMM YYYY");
              if (experience.isPresent) experienceDate += " - Present";
              else if (experience.end)
                experienceDate += ` - ${moment(experience.end).format(
                  "MMM YYYY"
                )}`;
              return (
                <Stack key={index} spacing={4}>
                  <Stack>
                    <Heading
                      as="a"
                      href={experience.link}
                      fontSize="lg"
                      fontWeight="bold"
                      className="strike"
                      w="fit-content"
                      target="_blank"
                      rel="noopener noreferrer"
                      color={mainTextColor}
                    >
                      {experience.name}
                    </Heading>
                    {experience.start && (
                      <Text
                        color={mainTextColor}
                        fontStyle="italic"
                        fontWeight="light"
                      >
                        {experienceDate}
                      </Text>
                    )}
                  </Stack>
                  <Text color={mainTextColor}>{experience.description}</Text>
                </Stack>
              );
            })}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Experiences;
