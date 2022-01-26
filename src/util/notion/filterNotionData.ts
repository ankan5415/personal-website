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
export const filterNotionLinks = (links: Object) => {
  const { results } = links;
  const res = results.map((page) => {
    return {
      pageId: page.id,
      created_time: page.created_time,
      archived: page.archived,
      last_edited_time: page.last_edited_time,
      display: page.properties.Display?.checkbox,
      icon: page.properties.Icon?.select?.name || null,
      link: page.properties.Link?.url || null,
      name: page.properties.Name?.title[0]?.plain_text,
      type: page.properties.Type?.select?.name,
    };
  });
  return res as iNotionLink[];
};

export interface iNotionExperience {
  pageId: string;
  created_time: string;
  archived: boolean;
  last_edited_time: string;
  display: boolean;
  description: string;
  link?: string;
  name: string;
  type: "About Me" | "Work" | "Competition" | "Education" | "Descriptor";
}
export const filterNotionExperiences = (experiences: Object) => {
  const { results } = experiences;
  const res = results.map((page) => {
    return {
      pageId: page.id,
      created_time: page.created_time,
      archived: page.archived,
      last_edited_time: page.last_edited_time,
      description:
        page.properties.Description?.rich_text[0]?.plain_text || null,
      display: page.properties.Display?.checkbox,
      name: page.properties.Name?.title[0]?.plain_text,
      link: page.properties.Link?.url || null,
      type: page.properties.Type?.select?.name,
    };
  });
  return res as iNotionExperience[];
};
export interface iNotionSkill {
  pageId: string;
  created_time: string;
  archived: boolean;
  last_edited_time: string;
  display: boolean;
  name: string;
  type: "Native Speaker" | "Exploring" | "Learning About";
}
export const filterNotionSkills = (skills: Object) => {
  const { results } = skills;
  const res = results.map((page) => {
    return {
      pageId: page.id,
      created_time: page.created_time,
      archived: page.archived,
      last_edited_time: page.last_edited_time,
      display: page.properties.Display?.checkbox,
      name: page.properties.Name?.title[0]?.plain_text,
      type: page.properties.Type?.select?.name,
    };
  });
  return res as iNotionSkill[];
};
