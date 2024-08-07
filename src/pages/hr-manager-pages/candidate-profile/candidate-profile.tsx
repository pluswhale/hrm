import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { Button } from 'shared/components/button/button';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

import { useNavigate, useParams } from 'react-router';
import { CommentAndHistoryTemplate } from 'features/comment-and-history-template';
import { CandidateProfileInfo } from 'features/candidate-profile-info';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchCandidateById } from 'shared/api/candidates/thunks';
import { useCreateComment, useDeleteComment, useUpdateComment } from 'shared/api/comments/mutations';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { fetchCommentsByUser } from 'shared/api/comments/thunks';
import { CreateCommentBody } from 'shared/api/comments/types';
import { Candidate } from 'shared/types/candidate.type';

import styles from './candidate-profile.module.scss';

const CandidateProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const createCommentMutation = useCreateComment();
    const deleteCommentMutation = useDeleteComment();
    const updateCommentMutation = useUpdateComment();
    const userData = useSelector(userDataSelector);

    const queryParameters = {
        queryKey: 'fetchCandidateById',
        queryThunk: fetchCandidateById,
        queryThunkOptions: {
            id,
        },
    } as QueryParameters<Candidate>;

    const candidateByIdQuery = useFetchData(queryParameters);

    const queryParametersForComment = {
        queryKey: 'fetchCommentsByUser',
        queryThunk: fetchCommentsByUser,
        queryThunkOptions: {
            id,
            typeUser: 'candidate',
        },
    } as QueryParameters<any>;

    const commentsQuery = useFetchData(queryParametersForComment);

    const candidateName = candidateByIdQuery?.data?.last_name + ' ' + candidateByIdQuery?.data?.first_name;

    const navigation = [
        {
            title: 'Кандидаты',
            url: '/candidates',
        },
        {
            title: candidateName || '',
            url: undefined,
        },
    ];

    const onNavigateToEditCandidate = () => {
        navigate('/edit/candidate/' + candidateByIdQuery?.data?.id);
    };

    const onCreateComment = (commentText: string) => {
        if (id) {
            const body = {
                authorId: userData.id,
                candidateId: Number(id),
                text: commentText,
            } as CreateCommentBody;

            createCommentMutation.mutate(body);
        }
    };

    const onDeleteComment = (commentId: number) => {
        deleteCommentMutation.mutate(String(commentId));
    };

    const onEditComment = (commentId: number, text: string) => {
        updateCommentMutation.mutate({ commentId: String(commentId), updatedText: { text } });
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.candidate_profile_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button onClick={onNavigateToEditCandidate} text="Редактировать" view="default_bg_white" />
            </div>
            <div className={styles.main_content}>
                <div className={styles.candidate_info}>
                    {candidateByIdQuery?.data && <CandidateProfileInfo candidateData={candidateByIdQuery?.data} />}
                </div>

                <CommentAndHistoryTemplate
                    commentsList={commentsQuery?.data}
                    onCreateComment={onCreateComment}
                    onDeleteComment={onDeleteComment}
                    onEditComment={onEditComment}
                />
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidateProfile;

