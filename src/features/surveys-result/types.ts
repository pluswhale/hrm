import { Question } from 'shared/types/question.type';

export interface SurveyResult {
    id: string;
    percent: number;
    name: string;
}

export interface Props {
    questions: Question[];
}

