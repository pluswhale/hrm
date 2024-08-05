import { StandardInfoBlock } from 'entities/profile-items/standard-info-block';
import { HeaderBlock } from 'entities/profile-items/header-block';
import { mockUser } from 'shared/constants/constants';
import { SkillsBlock } from 'entities/profile-items/skills-block';
import { FC } from 'react';
import { formatDate } from 'shared/libs/dateFormater';
import dayjs from 'dayjs';

type Props = {
    employeeData: any;
};

export const EmployeeProfileInfo: FC<Props> = ({ employeeData }) => {
    const contacts = [
        { label: 'Номер телефона:', value: employeeData?.phone_number },
        { label: 'Telegram:', value: employeeData?.telegram },
        { label: 'Почта:', value: employeeData?.email },
    ];

    function countWorkDaysInMonth(dateString: string) {
        const date = dayjs(dateString);

        const totalDaysInMonth = date.daysInMonth();

        const dayOfMonth = date.date();

        const workDays = totalDaysInMonth - dayOfMonth + 1;

        return workDays;
    }

    const workDays = countWorkDaysInMonth(employeeData?.start_work_date);

    const info = [
        { label: 'Дата рождения:', value: formatDate(employeeData?.birthday_date) },
        { label: 'Домашний адрес:', value: employeeData?.home_address },
        {
            label: 'Дата начала работы:',
            value: `${formatDate(employeeData?.start_work_date)} (${workDays} месяцев)`,
        },
    ];
    return (
        <>
            <HeaderBlock
                name={`${employeeData?.last_name} ${employeeData?.first_name} ${employeeData?.sur_name}`}
                profession={employeeData?.sub_position?.title}
                avatar={mockUser?.avatar}
            />
            <StandardInfoBlock title="Контанты" rows={contacts} />
            <StandardInfoBlock title="О сотруднике" rows={info} />
            <SkillsBlock skills={employeeData?.key_skills} />
        </>
    );
};

