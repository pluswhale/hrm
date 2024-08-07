import { Candidate } from './candidate.type';

export interface Competence {
    id: number;
    name: string;
    candidates: Candidate[];
}

