import { Appeal } from './appeal.type';
import { Candidate } from './candidate.type';

export interface StageAppeal {
    id: number | string;
    name: string;
    appeal?: Appeal;
    candidates?: Candidate[];
    position: number;
}

