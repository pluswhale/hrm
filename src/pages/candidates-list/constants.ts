import { CandidatesDataContainerProps } from "features/candidates-data-container/types";
import { FilterSet } from "features/filter/types";

export const filterSet = [
    {
        id: 1,
        title: "По должности",
        checkboxes: [
            { label: "Руководство", checked: false },
            { label: "Менеджер", checked: false },
        ]
    },
    {
        id: 2,
        title: "По компетенциям",
        checkboxes: [
            { label: "C#", checked: false },
            { label: "react", checked: false },
            { label: "ASP.NET", checked: false },
            { label: "docker", checked: true },
            { label: "C#", checked: false },
            { label: "react", checked: false },
            { label: "ASP.NET", checked: false },
            { label: "docker", checked: false }
        ]
    }
] as FilterSet[];

export const candidatesListData = {
    candidates: [
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
} as CandidatesDataContainerProps

