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
