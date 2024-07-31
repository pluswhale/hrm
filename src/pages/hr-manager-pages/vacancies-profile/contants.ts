import { CandidatesRow } from 'features/vacancy-candidates/types';

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

// candidateRequirements: [
//     'опыт работы в сфере IT на аналогичной должности от 2 лет;',
//     'знание методологий и стандартов управлениям проектами;',
//     'опыт управления командой;',
//     'развитые навыки коммуникации и презентации;',
//     'умение быстро и самостоятельно принимать решения и отвечать за них;',
//     'нацеленность на результат.',
// ],
