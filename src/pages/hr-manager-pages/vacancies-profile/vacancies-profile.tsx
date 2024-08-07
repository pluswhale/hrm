import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { VacancyInfo } from 'features/vacancy-info';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { Button } from 'shared/components/button/button';

import { VacancyCandidates } from 'features/vacancy-candidates';

import styles from './vacancy-profile.module.scss';
import { useNavigate, useParams } from 'react-router';
import { fetchVacancyById } from 'shared/api/vacancies/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { Vacancy } from 'shared/types/vacancy.type';

const VacanciesProfile = () => {
    const { id: vacancyId } = useParams();

    const queryParameters = {
        queryKey: 'fetchVacancyById',
        queryThunk: fetchVacancyById,
        queryThunkOptions: {
            vacancyId,
        },
    } as QueryParameters<Vacancy>;

    const vacancyByIdQuery = useFetchData(queryParameters);

    const navigate = useNavigate();

    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: vacancyByIdQuery?.data?.name || '',
            url: '/vacancies',
        },
    ];

    const onNavigateToEditVacancy = () => {
        navigate(`/edit/vacancy/${vacancyByIdQuery?.data?.id}`);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button onClick={onNavigateToEditVacancy} text="Редактировать" view="default_bg_white" />
            </div>
            <> {vacancyByIdQuery?.data && <VacancyInfo vacancy={vacancyByIdQuery?.data} />} </>
            <VacancyCandidates stages={vacancyByIdQuery?.data?.stages || []} />
        </DefaultContentWrapper>
    );
};

export default VacanciesProfile;

