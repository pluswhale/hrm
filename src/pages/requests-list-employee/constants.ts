import { FilterSet } from 'features/filter/types';
import logo from '../../assets/Ellipse 1.svg';

export const REQUESTS_DATA = [
    {
        id: 1,
        name: 'Рыбинская Анастасия',
        profession: 'UX/UI дизайнер',
        status: 'Новый',
        meeting: 'Встреча с руководством',
        data: '7 апреля 2023',
        imageUrl: logo,
    },
    {
        id: 2,
        name: 'Теплинский Артем',
        profession: 'Backend-разработчик',
        status: 'Просмотрен',
        meeting: 'Отпуск',
        data: '7 апреля 2023',
        imageUrl: logo,
    },
    {
        id: 3,
        name: 'Зайцев Артем',
        profession: 'Backend-разработчик',
        status: 'Утвержден',
        meeting: 'Предложение',
        data: '7 апреля 2023',
        imageUrl: logo,
    },
    {
        id: 4,
        name: 'Ширяева Елена',
        profession: 'DevOps',
        status: 'Отклонен',
        meeting: 'Произвольная тема',
        data: '7 апреля 2023',
        imageUrl: logo,
    },
];

export const filterSet = [
    {
        id: 1,
        title: 'По статусу',
        checkboxes: [
            {
                id: 1,
                name: 'Руководство',
                isActive: false,
            },
            {
                id: 2,
                name: 'Менеджер',
                isActive: false,
            },
            {
                id: 3,
                name: 'Аналитик',
                isActive: false,
            },
            {
                id: 4,
                name: 'Дизайнер',
                isActive: false,
            },
        ],
    },
    {
        id: 2,
        title: 'По по теме',
        checkboxes: [
            {
                id: 1,
                name: 'C#',
                isActive: false,
            },
            {
                id: 2,
                name: 'PHP',
                isActive: false,
            },
            {
                id: 3,
                name: 'Java',
                isActive: false,
            },
            {
                id: 4,
                name: 'Unity',
                isActive: false,
            },
            {
                id: 5,
                name: 'JavaScript',
                isActive: false,
            },
        ],
    },
] as FilterSet[];

