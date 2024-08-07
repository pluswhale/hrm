import { Candidate } from './candidate.type';
import { Employee } from './employee.type';

export interface UserHistory {
    id: number;
    created_at: Date;
    text: string;
    employee: Employee | null;
    candidate: Candidate | null;
}

