import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { skillType } from "types";
import generateSkillsText from "util/helpers/generateSkillsText";
import { iNotionSkill } from "util/notion";
const skillOrder = [
  skillType.PROFICIENT,
  skillType.EXPLORING,
  skillType.LEARNING,
];

const separateSkills = (skills: iNotionSkill[]) => {
  const res = new Map<String, String[]>();
  skills.forEach((el) => {
    res.set(el.type, [...(res.get(el.type) ?? []), el.name]);
  });
  return res;
};

const Skills = ({ skills }: { skills: iNotionSkill[] }) => {
  const separatedSkills = separateSkills(skills);

  return (
    <>
      {skillOrder.map((skillName, index) => {
        const skillText = generateSkillsText(separatedSkills.get(skillName)!);
        return (
          <Box as="span" key={index} w="full">
            <Text mr={5} fontWeight="semibold" as="span">
              {skillName}
            </Text>
            <Text
              as="span"
              bgGradient="linear(0deg,#2a54f5,#31a6ce)"
              bgClip="text"
              fontWeight={400}
            >
              {skillText}
            </Text>
          </Box>
        );
      })}
    </>
  );
};

export default Skills;
