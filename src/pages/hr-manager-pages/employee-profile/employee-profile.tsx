import { FC, ReactElement } from 'react';

import { EmployeeProfileInfo } from '../../../features/employee-profile-info';

import style from './employee-profile.module.scss';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import { CommentAndHistoryTemplate } from 'features/comment-and-history-template';
import parseUriParams from 'shared/libs/parseUriParams';
import { useParams } from 'react-router';
import { fetchEmployeeById } from 'shared/api/employees/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useCreateComment, useDeleteComment, useUpdateComment } from 'shared/api/comments/mutations';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { CreateCommentBody } from 'shared/api/comments/types';
import { fetchCommentsByUser } from 'shared/api/comments/thunks';

const EmployeeProfile: FC = (): ReactElement => {
    const params = parseUriParams(window.location.href);
    const { id } = useParams();
    const createCommentMutation = useCreateComment();
    const deleteCommentMutation = useDeleteComment();
    const updateCommentMutation = useUpdateComment();
    const userData = useSelector(userDataSelector);

    const { id: targetUserId } = useParams();

    const queryParameters = {
        queryKey: 'fetchEmployeeById',
        queryThunk: fetchEmployeeById,
        queryThunkOptions: {
            id,
        },
    } as QueryParameters<any>;

    const employeeQuery = useFetchData(queryParameters);

    const queryParametersForComment = {
        queryKey: 'fetchCommentsByUser',
        queryThunk: fetchCommentsByUser,
        queryThunkOptions: {
            id: targetUserId,
            typeUser: 'employee',
        },
    } as QueryParameters<any>;

    const commentsQuery = useFetchData(queryParametersForComment);

    const navigation = [
        {
            title: params?.status === 'current' ? 'Текущие сотрудники' : 'Бывшие сотрудники',
            url: `/employees?status=${params?.status}`,
        },
        {
            title: `${employeeQuery?.data?.last_name} ${employeeQuery?.data?.first_name}`,
            url: undefined,
        },
    ];

    const onCreateComment = (commentText: string) => {
        if (targetUserId) {
            const body = {
                authorId: userData.id,
                employeeId: Number(targetUserId),
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
            <div className={style.container}>
                <div className={style.container__backLink}>
                    <HorizontalNavigation navigation={navigation} />
                </div>
                <div className={style.container__wrap}>
                    <div className={style.container__wrapper_left}>
                        <EmployeeProfileInfo employeeData={employeeQuery?.data} />
                    </div>
                    <div className={style.container__wrapper}>
                        <CommentAndHistoryTemplate
                            commentsList={commentsQuery?.data}
                            onCreateComment={onCreateComment}
                            onDeleteComment={onDeleteComment}
                            onEditComment={onEditComment}
                        />
                    </div>
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default EmployeeProfile;

