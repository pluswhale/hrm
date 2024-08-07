import { Candidate } from './candidate.type';
import { Vacancy } from './vacancy.type';

export interface Stage {
    id: number | string;
    name: string;
    vacancy?: Vacancy;
    candidates?: Candidate[];
    position: number;
}

