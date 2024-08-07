import { Competence } from 'shared/types/competence.type';
import { KeySkill } from 'shared/types/key-skill.type';

export type SkillsBlockProps = {
    skills: (KeySkill | Competence)[];
};

