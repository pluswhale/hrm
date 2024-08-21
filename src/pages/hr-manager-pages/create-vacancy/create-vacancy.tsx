import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './create-vacancy.module.scss';
import { CreateVacancyForm } from 'features/create-vacancy-form';
import { useMediaQuery } from 'react-responsive';

const CreateVacancy = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const navigation = [
        {
            title: isMobile ? 'Вакансии' : 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: 'Создание вакансии',
            url: undefined,
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

