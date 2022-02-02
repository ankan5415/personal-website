import { iNotionExperience, iNotionSkill, iNotionLink } from ".";
export const filterNotionLinks = (links: Object) => {
  // @ts-expect-error
  const { results } = links;
  // @ts-expect-error
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

export const filterNotionExperiences = (experiences: Object) => {
  // @ts-expect-error
  const { results } = experiences;
  // @ts-expect-error
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
      start: page.properties.Date?.date?.start || null,
      end: page.properties.Date?.date?.end || null,
      isPresent: page.properties.IsPresent?.checkbox || null,
      type: page.properties.Type?.select?.name,
    };
  });
  return res as iNotionExperience[];
};

export const filterNotionSkills = (skills: Object) => {
  // @ts-expect-error
  const { results } = skills;
  // @ts-expect-error
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
