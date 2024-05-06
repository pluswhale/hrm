import { EmployeesDataContainerProps } from "features/employees-list-data-container/types";
import { FilterSet } from "features/filter/types";

export const filterSet = [
    {
        id: 1,
        title: "По должности",
        checkboxes: [
            { label: "UX/UI designer", checked: true },
            { label: "Backend-разработчик", checked: false },
            { label: "Frontend-разработчик", checked: true },
            { label: "CI/CD", checked: true }
        ]
    },
    {
        id: 2,
        title: "По навыкам",
        checkboxes: [
            { label: "bootstrap", checked: true },
            { label: "react", checked: false },
            { label: "ASP.NET", checked: true },
            { label: "docker", checked: true }
        ]
    }
] as FilterSet[];

export const employeeListData = {
    employees: [
        {
            id: 1,
            imageSrc: 'https://assets.materialup.com/uploads/9e891d99-30d7-4763-9b73-358cc8e8b2cc/preview.png',
            name: 'Нектов Некто Нектович',
            role: 'Ui/UX designer',
            skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]
        },
        {
            id: 2,
            imageSrc: 'https://assets.materialup.com/uploads/9e891d99-30d7-4763-9b73-358cc8e8b2cc/preview.png',
            name: 'Нектов Некто Нектович',
            role: 'Ui/UX designer',
            skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]
        },
        {
            id: 3,
            imageSrc: 'https://assets.materialup.com/uploads/9e891d99-30d7-4763-9b73-358cc8e8b2cc/preview.png',
            name: 'Нектов Некто Нектович',
            role: 'Ui/UX designer',
            skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]
        },
        {
            id: 4,
            imageSrc: 'https://assets.materialup.com/uploads/9e891d99-30d7-4763-9b73-358cc8e8b2cc/preview.png',
            name: 'Нектов Некто Нектович',
            role: 'Ui/UX designer',
            skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "bootstrap"]
        },
    ]
} as EmployeesDataContainerProps