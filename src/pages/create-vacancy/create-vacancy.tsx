import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { VacancyInfo } from 'features/vacancy-info';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

import { VacancyCandidates } from 'features/vacancy-candidates';

import styles from './create-vacancy.module.scss';
import { CreateVacancyForm } from 'features/create-vacancy-form';

const CreateVacancy = () => {
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: 'Название вакансии',
            url: '/vacancies',
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <CreateVacancyForm />
        </DefaultContentWrapper>
    );
};

export default CreateVacancy;

