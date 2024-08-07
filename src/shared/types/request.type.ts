import { Employee } from './employee.type';
import { HRManager } from './hr-manager.type';

export interface Request {
    id: number;
    type: RequestType;
    answer: string | null;
    created_at: Date | undefined | string;
    managed_at: Date | undefined | string;
    status: RequestStatus;
    author: Employee;
    managed_by: HRManager;
}

export type RequestType = 'meeting with management' | 'vacation' | 'compensation' | 'offer' | 'other';
export type RequestStatus = 'new' | 'seen' | 'approved' | 'rejected';

