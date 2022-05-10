import { Skill, SkillText } from '@types';
import { capitalizeFirstLetter } from '@util/util';

export const compileSkillsData = (type: 'mobile' | 'desktop', skills: Skill[]): SkillText[] => {
  const t = capitalizeFirstLetter(type);
  return skills
    .filter((s: Skill): boolean => !!s[`direction${t}`])
    .map((s: Skill): SkillText => {
      return {
        text: s.label,
        direction: s[`direction${t}`],
        position: [s[`xAxis${t}`], s[`yAxis${t}`]],
      };
    });
};
