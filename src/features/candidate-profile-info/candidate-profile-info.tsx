import { StandardInfoBlock } from 'entities/profile-items/standard-info-block';
import { HeaderBlock } from 'entities/profile-items/header-block';
import { mockUser } from 'shared/constants/constants';
import { SkillsBlock } from 'entities/profile-items/skills-block';
import { VacanciesBlock } from 'entities/vacancy-items/vacancies-block';
import { PractiesBlock } from 'entities/practise-items/practies-block';
import { VacanciesExperience } from 'entities/vacancy-items/vacancies-experience/vacancies-experience';
import { FC, ReactElement } from 'react';
import { Candidate } from 'shared/types/candidate.type';

type Props = {
    candidateData: Candidate;
};

export const CandidateProfileInfo: FC<Props> = ({ candidateData }): ReactElement => {
    const candidateFullName =
        candidateData?.last_name + ' ' + candidateData?.first_name + ' ' + candidateData?.sur_name;

    const contacts = [
        { label: 'Номер телефона:', value: candidateData?.phone_number || '' },
        { label: 'Telegram:', value: candidateData?.telegram || '' },
        { label: 'Почта:', value: candidateData?.email || '' },
    ];
    return (
        <>
            <HeaderBlock
                isDisplayAge={true}
                name={candidateFullName}
                birthday_date={candidateData?.birthday_date}
                home_address={candidateData?.home_address}
                avatar={mockUser?.avatar}
            />
            <StandardInfoBlock title="Контанты" rows={contacts} />
            <VacanciesBlock vacancies={candidateData?.stages} />
            <PractiesBlock practies={candidateData?.stageAppeals} />
            <VacanciesExperience experiences={candidateData?.experiences} />
            <SkillsBlock skills={candidateData?.competences} />
        </>
    );
};

