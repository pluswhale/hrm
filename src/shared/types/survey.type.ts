import { Employee } from './employee.type';
import { HRManager } from './hr-manager.type';
import { Question } from './question.type';

export interface Survey {
    id: number;
    name: string;
    createdAt: Date | string | undefined;
    deadlineFrom: Date | string | undefined;
    deadlineTo: Date | string | undefined;
    author: HRManager;
    totalParticipants: number;
    takenCount: number;
    participantsCount: number;
    completedParticipants: number;
    description: string;
    type: 'personal' | 'general';
    anonymous: boolean;
    questions: Question[];
    targetedEmployees: Employee[];
}

