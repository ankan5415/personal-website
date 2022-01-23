import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/react";
import notion from "../util/notion";
import ImageBackground from "../components/ImageBackground";
import moment from "moment";
import { filterNotionLinks } from "../util/notion/filterNotionData";

interface iHomeProps {
  links: Object;
  skills: Object;
  experiences: Object;
  age: String;
}

const Home: NextPage<iHomeProps> = ({ links, skills, experiences, age }) => {
  return (
    <SimpleGrid
      w="100vw"
      minH="100vh"
      columns={{ base: 2, sm: 1, md: 2, lg: 2 }}
    >
      <ImageBackground age={age} links={links} />
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
      skills,
      experiences,
      age,
    },
    revalidate: 60,
  };
}

export default Home;
