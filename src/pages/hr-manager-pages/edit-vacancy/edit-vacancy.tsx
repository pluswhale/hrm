import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { EditVacancyForm } from 'features/edit-vacancy-form';
import { Button } from 'shared/components/button/button';
import { useParams } from 'react-router-dom';
import { fetchVacancyById } from 'shared/api/vacancies/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';

import styles from './edit-vacancy.module.scss';
import { useDeleteVacancy, useSetVacancyStatus } from 'shared/api/vacancies/mutations';

const EditVacancy = () => {
    const { id: vacancyId } = useParams();
    const deleteVacancyMutation = useDeleteVacancy();
    const setVacancyStatusMutation = useSetVacancyStatus();

    const queryParameters = {
        queryKey: 'fetchVacancyById',
        queryThunk: fetchVacancyById,
        queryThunkOptions: {
            vacancyId,
        },
    } as QueryParameters<any>;

    const vacancyByIdQuery = useFetchData(queryParameters);

    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: vacancyByIdQuery?.data?.name,
            url: `/vacancies/${vacancyByIdQuery?.data?.id}`,
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
                    <Button
                        onClick={() =>
                            setVacancyStatusMutation.mutate({
                                vacancyId: vacancyByIdQuery?.data?.id,
                                status: !vacancyByIdQuery?.data?.is_active,
                            })
                        }
                        view="default_bg_white"
                        text={vacancyByIdQuery?.data?.is_active ? 'Остановить' : 'Активировать'}
                    />
                    <Button
                        onClick={() => deleteVacancyMutation.mutate(vacancyByIdQuery?.data?.id)}
                        view="default_bg_white"
                        text="Удалить"
                    />
                </div>
            </div>
            <EditVacancyForm vacancy={vacancyByIdQuery?.data} />
        </DefaultContentWrapper>
    );
};

export default EditVacancy;

