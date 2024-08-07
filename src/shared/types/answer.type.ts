import { AnswerOption } from './answer-option.type';
import { Employee } from './employee.type';
import { Question } from './question.type';

export interface Answer {
    id: number;
    question: Question;
    answeredBy: Employee;
    textAnswer?: string | null;
    selectedOption?: AnswerOption | null;
}

