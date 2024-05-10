export const VACANCIES_DATA = [
    {
        id: 1,
        title: 'Менеджер Вакансий',
        preferredIncome: '90 000 руб.',
        employment: 'полная занятость',
        schedule: 'полный день, удаленная работа',
        status: 'В работе',
    },
    {
        id: 2,
        title: 'Менеджер Вакансий',
        preferredIncome: '90 000 руб.',
        employment: 'полная занятость',
        schedule: 'полный день, удаленная работа',
        status: 'В работе',
    },
] as Vacancy[];

export const PRACTICES_DATA = [
    {
        id: 1,
        title: 'Менеджер IT-Проектов',
        testTask: 'Тестовое задание',
        comment: 'УрФУ, 4 курс направления Прикладная информатика',
        status: 'В работе',
    },
    {
        id: 2,
        title: 'Менеджер IT-Проектов',
        testTask: 'Тестовое задание',
        comment: 'УрФУ, 4 курс направления Прикладная информатика',
        status: 'В работе',
    },
] as Practice[];

export const EXPERIENCES_DATA = [
    {
        id: 1,
        experience: 'Май 2021 - апрель 2024 (2 года 11 месяцев)',
        company_name: 'Roso Group',
        company_url: 'https://rosogroup.ru',
        job_title: 'Менеджер проектов',
        company_url_name: 'rosogroup.ru',
        responsibilities_and_achievements: [
            '- Управление всем блоком проектирования и развития проектов;',
            '- Взаимодействие с клиентами на всех этапах разработки;',
            '- Постановка и контроль исполнения задач группой разработчиков (от дизайна до тех.реализации);',
            '- Контроль сроков и результатов разработки;',
            '- Ведение отчетности по выполненным работам.',
            '- Работа над 5-7 проектами одновременно.',
        ],
    },
] as Experience[];

type Experience = {
    id: number;
    experience: string;
    company_name: string;
    job_title: string;
    company_url: string;
    company_url_name: string;
    responsibilities_and_achievements: string[];
};

type Vacancy = {
    id: number;
    title: string;
    preferredIncome: string;
    employment: string;
    schedule: string;
    status: string;
};

type Practice = {
    id: number;
    title: string;
    testTask: string;
    comment: string;
    status: string;
};

