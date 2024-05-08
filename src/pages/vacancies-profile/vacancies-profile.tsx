import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { VacancyInfo } from 'features/vacancy-info';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { CANDIDATES_ROWS, VACANCY_DATA } from './contants';
import { Button } from 'shared/components/button/button';

import { VacancyCandidates } from 'features/vacancy-candidates';

import styles from './vacancy-profile.module.scss';
import { useNavigate } from 'react-router';

const VacanciesProfile = () => {
    const navigate = useNavigate();
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: VACANCY_DATA.title,
            url: '/vacancies',
        },
    ];

    const onNavigateToEditVacancy = () => {
        navigate(`/edit/vacancy/${VACANCY_DATA?.id}`);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button onClick={onNavigateToEditVacancy} text="Редактировать" view="default_bg_white" />
            </div>
            <VacancyInfo vacancy={VACANCY_DATA} />
            <VacancyCandidates candidateRows={CANDIDATES_ROWS} />
        </DefaultContentWrapper>
    );
};

export default VacanciesProfile;

