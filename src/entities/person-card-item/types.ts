import { KeySkill, SubPosition } from 'features/employees-list-data-container/types';

export type PersonCardProps = {
    imageSrc: string;
    name: string;
    navigationUrl: string;
    role: SubPosition;
    skills: KeySkill[];
};

