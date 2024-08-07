import { Competence } from './competence.type';
import { StageAppeal } from './stage-appeal.type';
import { Stage } from './stage.type';
import { UserHistory } from './user-history.type';

export interface Candidate {
    id: number;
    last_name: string;
    first_name: string;
    email: string;
    phone_number: string;
    sur_name?: string;
    birthday_date?: Date;
    home_address?: string;
    telegram?: string;
    comments: Comment[];
    experiences: Experience[];
    educations: Education[];
    competences: Competence[];
    stages: Stage[];
    stageAppeals: StageAppeal[];
    userHistories: UserHistory[];
}

export interface Experience {
    id: number;
    company_name: string;
    position: string;
    responsibilities_achievements: string;
    work_start_date: Date;
    work_end_date: Date;
    candidate: Candidate;
}

export interface Education {
    id: number;
    institution_name: string;
    faculty: string;
    specialisation: string;
    end_date: string;
    candidate: Candidate;
}

