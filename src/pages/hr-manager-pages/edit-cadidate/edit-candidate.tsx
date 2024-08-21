import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { EditCandidateForm } from 'features/edit-candidate-form';

import styles from './edit-candidate.module.scss';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchCandidateById } from 'shared/api/candidates/thunks';
import { useParams } from 'react-router';
import { Candidate } from 'shared/types/candidate.type';
import { useMediaQuery } from 'react-responsive';

const EditCandidate = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { id: candidateId } = useParams();

    const queryParametersForFetchCandidate = {
        queryKey: 'fetchCandidateById',
        queryThunk: fetchCandidateById,
        queryThunkOptions: {
            id: candidateId,
        },
    } as QueryParameters<Candidate>;

    const candidateQuery = useFetchData(queryParametersForFetchCandidate);

    const candidateName = candidateQuery?.data?.last_name + ' ' + candidateQuery?.data?.first_name;

    const navigation = [
        {
            title: 'Кандидаты',
            url: '/candidates',
        },
        {
            title: candidateName,
            url: `candidates/${candidateId}`,
        },
        {
            title: 'Редактирование',
            url: undefined,
        },
    ];

    const navigationMobile = [
        {
            title: 'Кандидаты',
            url: '/candidates',
        },
        {
            title: 'Редактирование',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={isMobile ? navigationMobile : navigation} />
            </div>
            <>{candidateQuery?.data && <EditCandidateForm candidateData={candidateQuery?.data} />}</>
        </DefaultContentWrapper>
    );
};

export default EditCandidate;

