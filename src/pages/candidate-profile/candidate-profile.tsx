import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { Button } from 'shared/components/button/button';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

import styles from './candidate-profile.module.scss';
import { useNavigate, useParams } from 'react-router';
import { CommentAndHistoryTemplate } from 'features/comment-and-history-template';
import { CandidateProfileInfo } from 'features/candidate-profile-info';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchCandidateById } from 'shared/api/candidates/thunks';

const CandidateProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const queryParameters = {
        queryKey: 'fetchCandidateById',
        queryThunk: fetchCandidateById,
        queryThunkOptions: {
            id,
        },
    } as QueryParameters<any>;

    const candidateByIdQuery = useFetchData(queryParameters);

    const navigation = [
        {
            title: 'Кандидаты',
            url: '/candidates',
        },
        {
            title: 'Рыбина Анастасия',
            url: undefined,
        },
    ];

    const onNavigateToEditCandidate = () => {
        navigate('/edit/candidate/1');
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.candidate_profile_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button onClick={onNavigateToEditCandidate} text="Редактировать" view="default_bg_white" />
            </div>
            <div className={styles.main_content}>
                <div className={styles.candidate_info}>
                    <CandidateProfileInfo />
                </div>

                <CommentAndHistoryTemplate />
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidateProfile;

