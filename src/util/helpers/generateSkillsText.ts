const generateSkillsText = (skills: String[]) => {
  let res = "";
  for (let index = 0; index < skills.length - 1; index++) {
    const skill = skills[index];
    res += `${skill} ● `;
  }
  res += skills[skills.length - 1];
  return JSON.parse('"' + res + '"');
};
export default generateSkillsText;
