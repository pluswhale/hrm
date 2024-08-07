import { Employee } from './employee.type';
import { Question } from './question.type';

export interface AnswerOption {
    id: number;
    optionName: string;
    type: 'one_variant' | 'multiple_variants';
    question: Question;
    answeredBy: Employee;
}

