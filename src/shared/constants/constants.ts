import { User } from "shared/types/types";

import logo from "../../assets/Ellipse 1.svg";

export const mockUser = {
    id: 1,
    name: 'Рыбина Анастасия Эдуардовна',
    role: ' UX/UI дизайнер',
    avatar: logo,
    info: {
        contacts: [
            { label: "Номер телефона:", value: "+7 (912) 345 - 67 - 89" },
            { label: "Telegram:", value: "@teg" },
            { label: "Почта:", value: "pochta@mail.ru" }
        ],
        key: [
            { label: "Дата рождения:", value: "4 августа 2002 г." },
            { label: "Домашний адрес:", value: "г. Екатеринбург, ул. Бахчиванджи" },
            { label: "Дата начала работы:", value: "19 июня 2024 г. (9 месяцев)" },
        ],
    },
    skills: ["Деловая коммуникация", "Проектный менеджмент", "Планирование"],
} as User;