import { Candidate } from 'features/vacancy-candidates/types';
import { v4 as uuidv4 } from 'uuid';

export const data = [
    {
        id: 1,
        name: 'Рыбина Анастасия',
        preferredIncome: '80 000 - 100 000 руб.',
        experience: '2,5 лет',
    },
    {
        id: 2,
        name: 'Теплинский Артем',
        preferredIncome: '80 000 - 100 000 руб.',
        experience: '2,5 лет',
    },
] as Candidate[];

export const columnsFromBackend = {
    [uuidv4()]: {
        title: 'Новые',
        items: data,
    },
    [uuidv4()]: {
        title: 'Проверка тестового',
        items: [],
    },
    [uuidv4()]: {
        title: 'Собеседование',
        items: [],
    },
    [uuidv4()]: {
        title: 'Принято',
        items: [],
    },
};

