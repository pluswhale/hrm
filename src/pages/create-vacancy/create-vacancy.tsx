import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './create-vacancy.module.scss';
import { CreateVacancyForm } from 'features/create-vacancy-form';

const CreateVacancy = () => {
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: 'Создание вакансии',
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

