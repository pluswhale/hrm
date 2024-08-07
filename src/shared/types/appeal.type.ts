import { Competence } from './competence.type';
import { StageAppeal } from './stage-appeal.type';

export interface Appeal {
    id: number;
    name: string;
    created_at: Date | string;
    is_active: boolean;
    desired_count_candidates?: string;
    test_task_link?: string;
    deadline?: Date | string;
    competences: Competence[];
    responsibilities?: string;
    requirements?: string;
    stages: StageAppeal[];
}

