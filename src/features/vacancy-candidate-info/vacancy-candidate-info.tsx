import { StandardInfoBlock } from 'entities/profile-items/standard-info-block';
import { HeaderBlock } from 'entities/profile-items/header-block';
import { mockUser } from 'shared/constants/constants';
import { SkillsBlock } from 'entities/profile-items/skills-block';
import { VacanciesBlock } from 'entities/vacancy-items/vacancies-block';
import { EXPERIENCES_DATA, PRACTICES_DATA, VACANCIES_DATA } from './constants';
import { PractiesBlock } from 'entities/practise-items/practies-block';
import { VacanciesExperience } from 'entities/vacancy-items/vacancies-experience/vacancies-experience';

export const VacancyCandidateInfo = () => {
    //TODO: запрос на пользователя по ID
    return (
        <>
            {/* <HeaderBlock name={mockUser?.name} profession={mockUser?.role} avatar={mockUser?.avatar} /> */}
            <StandardInfoBlock title="Контанты" rows={mockUser?.info?.contacts} />
            <VacanciesBlock vacancies={VACANCIES_DATA} />
            <PractiesBlock practies={PRACTICES_DATA} />
            <VacanciesExperience experiences={EXPERIENCES_DATA} />
            <SkillsBlock skills={mockUser?.skills} />
        </>
    );
};

