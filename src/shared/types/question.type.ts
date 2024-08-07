import { AnswerOption } from './answer-option.type';
import { Answer } from './answer.type';
import { Survey } from './survey.type';

export interface Question {
    id: number;
    title: string;
    type: QuestionType;
    textAnswer?: string | null;
    survey: Survey;
    options: AnswerOption[];
    answers: Answer[];
}

export type QuestionType = 'short_text' | 'long_text' | 'one_variant' | 'multiple_variants';
