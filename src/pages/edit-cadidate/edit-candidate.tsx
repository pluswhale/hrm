import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { EditCandidateForm } from 'features/edit-candidate-form';

import styles from './edit-candidate.module.scss';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchCandidateById } from 'shared/api/candidates/thunks';
import { useParams } from 'react-router';

const EditCandidate = () => {
    const { id: candidateId } = useParams();

    const queryParametersForFetchCandidate = {
        queryKey: 'fetchCandidateById',
        queryThunk: fetchCandidateById,
        queryThunkOptions: {
            id: candidateId,
        },
    } as QueryParameters<any>;

    const candidateQuery = useFetchData(queryParametersForFetchCandidate);

    const candidateName = candidateQuery?.data?.last_name + ' ' + candidateQuery?.data?.first_name;

    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: candidateName,
            url: '/vacancies/1/1',
        },
        {
            title: 'Редактирование кандидата',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <EditCandidateForm candidateData={candidateQuery?.data} />
        </DefaultContentWrapper>
    );
};

export default EditCandidate;

