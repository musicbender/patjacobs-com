import { Gcms_Skill, Skill } from '../../types';
import { capitalizeFirstLetter } from './util';

export const compileSkillsData = (type: 'mobile' | 'desktop', skills: Gcms_Skill[]): Skill[] => {
  const t = capitalizeFirstLetter(type);
  return skills
    .filter((s: Gcms_Skill): boolean => !!s[`direction${t}`])
    .map((s: Gcms_Skill): Skill => {
      return {
        text: s.label,
        direction: s[`direction${t}`],
        position: [s[`xAxis${t}`], s[`yAxis${t}`]],
      };
    });
};
