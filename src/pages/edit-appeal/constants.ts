export const APPEAl_DATA = {
    id: 1,
    title: 'Frontend-разработка',
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

