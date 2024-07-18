import { StandardInfoBlock } from 'entities/profile-items/standard-info-block';
import { HeaderBlock } from 'entities/profile-items/header-block';
import { mockUser } from 'shared/constants/constants';
import { SkillsBlock } from 'entities/profile-items/skills-block';
import { FC } from 'react';

type Props = {
    employeeData: any;
};

export const EmployeeProfileInfo: FC<Props> = ({ employeeData }) => {
    const contacts = [
        { label: 'Номер телефона:', value: employeeData?.phone_number },
        { label: 'Telegram:', value: employeeData?.telegram },
        { label: 'Почта:', value: employeeData?.email },
    ];

    const info = [
        { label: 'Дата рождения:', value: employeeData?.birthday_date },
        { label: 'Домашний адрес:', value: employeeData?.home_address },
        { label: 'Дата начала работы:', value: employeeData?.start_work_date },
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

