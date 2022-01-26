import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/react";
import notion from "../util/notion";
import Hero from "../components/Hero";
import moment from "moment";
import {
  filterNotionExperiences,
  filterNotionLinks,
  filterNotionSkills,
  iNotionExperience,
  iNotionLink,
  iNotionSkill,
} from "../util/notion/filterNotionData";
import Experiences from "../components/Experiences";

interface iHomeProps {
  links: iNotionLink[];
  skills: iNotionSkill[];
  experiences: iNotionExperience[];
  age: String;
}

const Home: NextPage<iHomeProps> = ({ links, skills, experiences, age }) => {
  return (
    <SimpleGrid
      w="100vw"
      minH="100vh"
      columns={{ base: 2, sm: 1, md: 2, lg: 2 }}
    >
      <Hero age={age} links={links} experiences={experiences} />
      <Experiences experiences={experiences} skills={skills} />
    </SimpleGrid>
  );
};

export async function getStaticProps() {
  const { NT_LINKS_DB, NT_SKILLS_DB, NT_EXPERIENCE_DB } = process.env;
  if (!NT_LINKS_DB || !NT_SKILLS_DB || !NT_EXPERIENCE_DB)
    throw new Error("Couldn't find database ID");

  const filtrationMethod = {
    property: "Display",
    checkbox: { equals: true },
  };
  const links = await notion.databases.query({
    database_id: NT_LINKS_DB,
  });
  const skills = await notion.databases.query({
    database_id: NT_SKILLS_DB,
    filter: filtrationMethod,
  });
  const experiences = await notion.databases.query({
    database_id: NT_EXPERIENCE_DB,
    filter: filtrationMethod,
  });

  const age = moment().diff(moment("20050411", "YYYYMMDD"), "year");

  return {
    props: {
      links: filterNotionLinks(links),
      skills: filterNotionSkills(skills),
      experiences: filterNotionExperiences(experiences),
      age,
    },
    revalidate: 60,
  };
}

export default Home;
