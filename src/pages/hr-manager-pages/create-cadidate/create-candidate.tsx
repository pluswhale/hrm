import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './create-vacancy.module.scss';
import { CreateCandidateForm } from 'features/create-candidate-form';

const CreateCandidate = () => {
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: 'Создание кандидата',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <CreateCandidateForm />
        </DefaultContentWrapper>
    );
};

export default CreateCandidate;

