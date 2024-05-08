import { CandidatesRow } from 'features/vacancy-candidates/types';

export const APPEAl_DATA = {
    id: 1,
    title: 'Менеджер Проектов',
    created_at: '10 августа 2022 г.',
    deadline: '10 сентября 2022 г.',
    seats: '10',
    accepted: '2',
    description: [
        'Адаптивная кросс-браузерная верстка отдельных страниц',
        'Верстка макетов сайтов',
        'Верстка компонентов системы + рефакторинг существующих',
        'Работа с командой дизайнеров',
        'Поддержка/доработка контента сайтов',
    ],
    requirements: ['Выполнение тестового задания.'],
} as Appeal;

export const CANDIDATES_ROWS = [
    {
        title: 'Новые',
        count: 2,
        candidates: [
            {
                id: 1,
                name: 'Рыбина Анастасия',
                avatar: null,
                experience: '2,5 лет',
                preferredIncome: '50 000 - 100 000 руб.',
            },
            {
                id: 2,
                name: 'Теплинский Артем',
                avatar: null,
                experience: '2,5 лет',
                preferredIncome: '50 000 - 100 000 руб.',
            },
        ],
    },
    {
        title: 'Проверка тестового',
        count: 0,
        candidates: null,
    },
    {
        title: 'Собеседование',
        count: 0,
        candidates: null,
    },
    {
        title: 'Принято',
        count: 0,
        candidates: null,
    },
] as CandidatesRow[];

type Appeal = {
    id: number;
    title: string;
    created_at: string;
    navigationUrl: string;
    deadline: string;
    status: string;
    seats: string;
    accepted: string;
    description: string[];
    requirements: string[];
};

