import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import notion from "../util/notion";

interface iHomeProps {
  links: Object;
  skills: Object;
  experiences: Object;
}

const Home: NextPage<iHomeProps> = ({ links, skills, experiences }) => {
  return (
    <div>
      <div>Hello!</div>
    </div>
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
    filter: filtrationMethod,
  });
  const skills = await notion.databases.query({
    database_id: NT_SKILLS_DB,
    filter: filtrationMethod,
  });
  const experiences = await notion.databases.query({
    database_id: NT_EXPERIENCE_DB,
    filter: filtrationMethod,
  });

  return {
    props: {
      links,
      skills,
      experiences,
    },
    revalidate: 60,
  };
}

export default Home;
