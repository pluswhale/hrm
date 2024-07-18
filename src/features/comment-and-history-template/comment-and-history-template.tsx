import React, { useState } from 'react';
import BtnInfo from '../../shared/components/switch-tab/switch-tab';
import { CommentItem } from '../../entities/comment-item';
import { HistoryItem } from '../../entities/history-item';
import AddIcon from './../../assets/Add pic - icon.svg';
import Emodji from './../../assets/Frame 23459.svg';
import AddImage from './../../assets/Vector.svg';
import { Button } from '../../shared/components/button/button';

import style from './comment-and-history-template.module.scss';
import { fetchCommentsByEmployee } from 'shared/api/comments/thunks';
import { useParams } from 'react-router';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useCreateComment, useDeleteComment, useUpdateComment } from 'shared/api/comments/mutations';
import { CreateCommentBody } from 'shared/api/comments/types';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../redux/selectors/auth';

const tabs = [{ label: 'Комментарии' }, { label: 'История' }];

export const CommentAndHistoryTemplate = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const createCommentMutation = useCreateComment();
    const deleteCommentMutation = useDeleteComment();
    const updateCommentMutation = useUpdateComment();
    const userData = useSelector(userDataSelector);
    const [commentText, setCommentText] = useState<string>('');

    const { id: targetUserId } = useParams();

    const queryParameters = {
        queryKey: 'fetchCommentsByEmployee',
        queryThunk: fetchCommentsByEmployee,
        queryThunkOptions: {
            id: targetUserId,
        },
    } as QueryParameters<any>;

    const commentsQuery = useFetchData(queryParameters);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const onCreateComment = () => {
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
        <div className={style.container}>
            <BtnInfo tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
            {activeTab === 0 && (
                <div className={style.container__wrapper}>
                    <div className={style.container__card_comment}>
                        <textarea
                            value={commentText}
                            onChange={({ target }) => setCommentText(target.value)}
                            placeholder="Новый комментарий..."
                            style={{
                                backgroundImage: `url(${Emodji})`,
                                backgroundPosition: 'top right',
                                backgroundRepeat: 'no-repeat',
                                padding: '10px',
                            }}
                        ></textarea>
                        <div className={style.container__card_bottom}>
                            <div className={style.container__card_bottom_img}>
                                <img className={style.container__card_img} src={AddImage} alt="AddImage" />
                                <img className={style.container__card_img} src={AddIcon} alt="AddIcon" />
                            </div>
                            <Button
                                onClick={onCreateComment}
                                styles={{ width: 'fit-content', height: '40px' }}
                                text="Опубликовать"
                                view="default_bg"
                            />
                        </div>
                    </div>
                    {commentsQuery?.data?.map((comment: any) => (
                        <CommentItem
                            onEditComment={onEditComment}
                            onDeleteComment={onDeleteComment}
                            key={comment.id}
                            comment={comment}
                        />
                    ))}
                </div>
            )}
            {activeTab === 1 && (
                <div>
                    <HistoryItem userName="Рыбина Анастасия" />
                </div>
            )}
        </div>
    );
};

