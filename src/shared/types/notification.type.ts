import { Employee } from './employee.type';
import { HRManager } from './hr-manager.type';

export interface Notification {
    id: number;
    header: string;
    created_at: Date;
    text: string;
    is_seen: boolean;
    authorEmployee: Employee | null;
    authorHRManager: HRManager | null;
    recipientEmployees: Employee[];
    recipientHRManagers: HRManager[];
}

