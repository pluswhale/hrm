import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './edit-vacancy.module.scss';
import { EditVacancyForm } from 'features/edit-vacancy-form';
import { VACANCY_DATA } from './constants';
import { Button } from 'shared/components/button/button';

const EditVacancy = () => {
    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: VACANCY_DATA?.title,
            url: `/vacancies/${VACANCY_DATA.id}`,
        },
        {
            title: 'Редактирование',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <div className={styles.vacancy_navigation__buttons}>
                    <Button view="default_bg_white" text="Остановить" />
                    <Button view="default_bg_white" text="Удалить" />
                </div>
            </div>
            <EditVacancyForm vacancy={VACANCY_DATA} />
        </DefaultContentWrapper>
    );
};

export default EditVacancy;

