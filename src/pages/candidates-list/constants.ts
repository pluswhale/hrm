import { CandidatesDataContainerProps } from 'features/candidates-data-container/types';
import { FilterSet } from 'features/filter/types';
import avatar from '../../assets/Ellipse 1.svg';

export const filterSet = [
    {
        id: 1,
        title: 'По должности',
        checkboxes: [
            { label: 'Руководство', checked: false },
            { label: 'Менеджер', checked: false },
        ],
    },
    {
        id: 2,
        title: 'По компетенциям',
        checkboxes: [
            { label: 'C#', checked: false },
            { label: 'react', checked: false },
            { label: 'ASP.NET', checked: false },
            { label: 'docker', checked: true },
            { label: 'C#', checked: false },
            { label: 'react', checked: false },
            { label: 'ASP.NET', checked: false },
            { label: 'docker', checked: false },
        ],
    },
] as FilterSet[];

export const candidatesListData = {
    candidates: [
        {
            id: 1,
            imageSrc: avatar,
            name: 'Теплинский Артем',
            role: 'Backend Разработчик',
            skills: ['C#', 'ASP .NET', 'Git', 'GraphQL'],
        },
        {
            id: 2,
            imageSrc: avatar,
            name: 'Рыбина Анастасия',
            role: 'Ui/UX designer',
            skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'bootstrap'],
        },
        {
            id: 3,
            imageSrc: avatar,
            name: 'Кожевников Роман',
            role: 'Frontend Разработчик',
            skills: ['React', 'TypeScript', 'HTML', 'CSS'],
        },
        {
            id: 4,
            imageSrc: avatar,
            name: 'Красильникова Яна',
            role: 'Менеджер Проектов',
            skills: ['Jira', 'Agile', 'Scrum', 'Soft skill'],
        },
    ],
};

