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

