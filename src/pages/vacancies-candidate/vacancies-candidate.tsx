import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { Button } from 'shared/components/button/button';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

import styles from './vacancies-candidate.module.scss';
import { useNavigate } from 'react-router';

const VacanciesCandidate = () => {
    const navigate = useNavigate();
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

    const onNavigateToEditCandidate = () => {
        navigate('/edit/candidate/1');
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button onClick={onNavigateToEditCandidate} text="Редактировать" view="default_bg_white" />
            </div>
        </DefaultContentWrapper>
    );
};

export default VacanciesCandidate;

