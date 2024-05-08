import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { EditCandidateForm } from 'features/edit-candidate-form';

import styles from './edit-candidate.module.scss';

const EditCandidate = () => {
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: 'Рыбына Анастасия',
            url: '/vacancies/1/1',
        },
        {
            title: 'Редактирование кандидата',
            url: '/vacancies',
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <EditCandidateForm />
        </DefaultContentWrapper>
    );
};

export default EditCandidate;

