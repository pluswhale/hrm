import { ColumnData } from '../../features/survey-info/types';
import { SurveyResult } from '../../features/surveys-result/types';

export const leftColumnData: ColumnData[] = [
    { title: 'Создан:', createdAt: '10 августа 2022 г.' },
    { title: 'Дата начала:', createdAt: '10 августа 2022 г.' },
    { title: 'Дата завершения:', createdAt: '10 августа 2022 г.' },
];

export const rightColumnData: ColumnData[] = [
    { title: 'Прошедшие опрос:', createdAt: '2 из 10' },
    { title: 'Другое название 2', createdAt: '2024-05-12' },
    { title: 'Другое название 3', createdAt: '2024-05-13' },
];

export const surveysResults: SurveyResult[] = [
    { id: '1', name: 'Вопрос 1', percent: 50 },
    { id: '2', name: 'Вопрос 2', percent: 30 },
    { id: '3', name: 'Вопрос 3', percent: 70 },
];

