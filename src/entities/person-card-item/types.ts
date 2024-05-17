import { Skill } from 'features/candidates-data-container/types';

export type PersonCardProps = {
    imageSrc: string;
    name: string;
    navigationUrl: string;
    role: string | undefined;
    skills: string[];
};

