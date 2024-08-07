import { KeySkill } from './key-skill.type';
import { SubPosition } from './sub-position.type';
import { Request } from './request.type';
import { AnswerOption } from './answer-option.type';
import { UserHistory } from './user-history.type';

export interface Employee {
    id: number;
    first_name: string;
    last_name: string;
    sur_name: string;
    is_dismissed: boolean;
    email: string;
    password: string;
    phone_number: string;
    telegram: string;
    birthday_date: string;
    home_address: string;
    reason_for_dismissal: string;
    work_period: string;
    start_work_date: string;
    key_skills: KeySkill[];
    sub_position: SubPosition;
    comments: Comment[];
    requests: Request[];
    answers: AnswerOption[];
    sentNotifications: Notification[];
    receivedNotifications: Notification[];
    userHistories: UserHistory[];
    role: string;
}

