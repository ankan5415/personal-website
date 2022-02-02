import { Client } from "@notionhq/client";
import { experienceType, skillType } from "types";

export interface iNotionSkill {
  pageId: string;
  created_time: string;
  archived: boolean;
  last_edited_time: string;
  display: boolean;
  name: string;
  // type: "Native Speaker" | "Exploring" | "Learning About";
  type: skillType;
}

export interface iNotionExperience {
  pageId: string;
  created_time: string;
  archived: boolean;
  last_edited_time: string;
  display: boolean;
  description: string;
  link?: string;
  name: string;
  start?: string;
  end?: string;
  isPresent?: boolean;
  // type: "About Me" | "Work" | "Competition" | "Education" | "Descriptor";
  type: experienceType;
}

export interface iNotionLink {
  pageId: string;
  created_time: string;
  archived: boolean;
  last_edited_time: string;
  display: boolean;
  icon?: string;
  link?: string;
  name: string;
  type: "Social" | "Clickable";
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default notion;
