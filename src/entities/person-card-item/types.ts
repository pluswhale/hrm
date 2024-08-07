import { KeySkill } from 'shared/types/key-skill.type';
import { SubPosition } from 'shared/types/sub-position.type';

export type PersonCardProps = {
    name: string;
    navigationUrl: string;
    role?: SubPosition;
    skills: KeySkill[];
};

