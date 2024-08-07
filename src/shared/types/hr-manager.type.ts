import { UserHistory } from './user-history.type';
import { Comment } from './comment.type';
import { Request } from './request.type';

export interface HRManager {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    telegram: string;
    role: string;
    sentNotifications: Notification[];
    receivedNotifications: Notification[];
    requests: Request[];
    comments: Comment[];
    userHistories: UserHistory[];
}

