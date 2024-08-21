import React, { FC, ReactElement, useState } from 'react';
import BtnInfo from '../../shared/components/switch-tab/switch-tab';
import { CommentItem } from '../../entities/comment-item';
import { HistoryItem } from '../../entities/history-item';
import AddIcon from './../../assets/Add pic - icon.svg';
import Emodji from './../../assets/Frame 23459.svg';
import AddImage from './../../assets/Vector.svg';
import { Button } from '../../shared/components/button/button';

import style from './comment-and-history-template.module.scss';
import { Comment } from 'shared/types/comment.type';
import SwitchTab from '../../shared/components/switch-tab/switch-tab';

const tabs = [{ label: 'Комментарии' }, { label: 'История' }];

type Props = {
    commentsList: Comment[];
    onCreateComment: (comment: string) => void;
    onDeleteComment: (commentId: number) => void;
    onEditComment: (commentId: number, comment: string) => void;
};

export const CommentAndHistoryTemplate: FC<Props> = ({
    commentsList,
    onCreateComment,
    onDeleteComment,
    onEditComment,
}): ReactElement => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [commentText, setCommentText] = useState<string>('');

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleSendComment = () => {
        onCreateComment(commentText);
        setCommentText('');
    };

    return (
        <div className={style.container}>
            <SwitchTab tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
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
                                onClick={handleSendComment}
                                styles={{ width: 'fit-content', height: '40px' }}
                                text="Опубликовать"
                                view="default_bg"
                            />
                        </div>
                    </div>
                    {commentsList?.map((comment) => (
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

