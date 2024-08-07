import { Candidate } from './candidate.type';
import { Competence } from './competence.type';
import { Stage } from './stage.type';

export enum NeededExperience {
    NONE = 'none',
    ONE = '1',
    THREE = '3',
    FIVE = '5',
}

export interface Vacancy {
    id: number;
    name: string;
    created_at: Date;
    is_active: boolean;
    vacancy_city: string;
    desired_count_candidates?: string;
    deadline?: Date;
    income_from?: string;
    income_to?: string;
    work_address?: string;
    needed_experience: NeededExperience;
    competences: Competence[];
    responsibilities?: string;
    requirements?: string;
    description?: string;
    stages: Stage[];
    candidates?: Candidate[];
}

