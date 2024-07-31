import { EmployeesDataContainerProps } from 'features/employees-list-data-container/types';
import { FilterSet } from 'features/filter/types';
import avatar from '../../assets/Ellipse 1.svg';

export const filterSet = [
    {
        id: 1,
        title: 'По должности',
        checkboxes: [],
    },
    {
        id: 2,
        title: 'По навыкам',
        checkboxes: [],
    },
] as FilterSet[];

// export const employeeListData = {
//     employees: [
//         {
//             id: 1,
//             imageSrc: avatar,
//             name: 'Рыбина Анастасия',
//             role: 'Ui/UX designer',
//             skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'bootstrap'],
//         },
//         {
//             id: 2,
//             imageSrc: avatar,
//             name: 'Рыбина Анастасия',
//             role: 'Ui/UX designer',
//             skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'bootstrap'],
//         },
//         {
//             id: 3,
//             imageSrc: avatar,
//             name: 'Рыбина Анастасия',
//             role: 'Ui/UX designer',
//             skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'bootstrap'],
//         },
//         {
//             id: 4,
//             imageSrc: avatar,
//             name: 'Рыбина Анастасия',
//             role: 'Ui/UX designer',
//             skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'bootstrap'],
//         },
//     ],
// } as EmployeesDataContainerProps;

