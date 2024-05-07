import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { Button } from 'shared/components/button/button';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

import styles from './vacancies-candidate.module.scss';

const VacanciesCandidate = () => {
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: 'Название вакансии',
            url: '/vacancies',
        },
        {
            title: 'Рыбина Анастасия',
            url: '/vacancies',
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button text="Редактировать" view="default_bg_white" />
            </div>
        </DefaultContentWrapper>
    );
};

export default VacanciesCandidate;

