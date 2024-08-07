import { Candidate } from './candidate.type';
import { Employee } from './employee.type';
import { HRManager } from './hr-manager.type';

export interface Comment {
    id: number;
    text: string;
    created_at: Date;
    author: HRManager;
    employee: Employee;
    candidate: Candidate;
}

